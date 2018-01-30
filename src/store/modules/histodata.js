import * as types from '../mutation-types';
import { getHistoData } from '@/api/api';

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
  async getHistoData({ commit, dispatch, state, rootState }, { id, interval }) {
    try {
      if (!rootState.tickers.byId[id]) {
        await dispatch('getTickers');
      }
      const symbol = rootState.tickers.byId[id].symbol;
      commit(types.GET_HISTO_DATA);
      const { data } = await getHistoData(symbol, interval);
      if (data['Response'] === 'Error') {
        throw new Error(data['ErrorsSummary'] || data['Message']);
      }
      commit(types.GET_HISTO_DATA_SUCCESS, { data, symbol });
    } catch (error) {
      commit(types.GET_HISTO_DATA_FAILED, error);
    }
  }
};

// mutations
const mutations = {
  [types.GET_HISTO_DATA_SUCCESS](state, { data, symbol }) {
    state.bySymbol = { ...state.bySymbol, [symbol]: data };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
