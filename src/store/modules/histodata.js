import * as types from '../mutation-types';
import { getHistoDay } from '@/api/histodata';

// Initial state
const state = {
  bySymbol: {}
};

// getters
const getters = {
  getOhlcAndVolumes: state => symbol => {
    const ohlc = [];
    const volume = [];
    const data = state.bySymbol[symbol] && state.bySymbol[symbol]['Data'];
    if (data) {
      data.map(item => {
        const time = item.time * 1000;
        ohlc.push([time, item.open, item.close, item.low, item.close]);
        volume.push([time, item.volumeto]);
      });
    }

    return {
      ohlc,
      volume
    };
  }
};

// actions
const actions = {
  async getHistoDay({ commit, dispatch, state, rootState }, id) {
    try {
      if (!rootState.tickers.byId.id) {
        await dispatch('getTickers');
      }
      const symbol = rootState.tickers.byId[id].symbol;
      commit(types.GET_HISTO_DAY);
      const { data } = await getHistoDay(symbol);
      commit(types.GET_HISTO_DAY_SUCCESS, { data, symbol });
    } catch (error) {
      commit(types.GET_HISTO_DAY_FAILED, error);
    }
  }
};

// mutations
const mutations = {
  [types.GET_HISTO_DAY](state) {
    state.loading = true;
    state.error = null;
  },

  [types.GET_HISTO_DAY_SUCCESS](state, { data, symbol }) {
    state.bySymbol = {...state.bySymbol, [symbol]: data};
    state.loading = false;
    state.error = null;
  },

  [types.GET_HISTO_DAY_FAILED](state, error) {
    state.loading = false;
    state.error = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
