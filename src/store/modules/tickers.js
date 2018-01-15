import * as types from '../mutation-types';
import { getTickers } from '@/api/tickers';
import { mapKeys } from 'lodash';
import { flow, map, orderBy } from 'lodash/fp';

// Initial state
const state = {
  byId: {},
  loading: false,
  error: null
};

// getters
const getters = {
  byId: state => flow(map(ticker => ticker), orderBy('rank'))(state.byId),
  isLoading: state => state.isLoading,
  error: state => state.error
};

// actions
const actions = {
  async getTickers({ commit }) {
    try {
      commit(types.GET_TICKERS);
      const tickers = await getTickers();
      commit(types.GET_TICKERS_SUCCESS, tickers.data);
    } catch (error) {
      commit(types.GET_TICKERS_FAILED, error);
    }
  }
};

// mutations
const mutations = {
  [types.GET_TICKERS](state) {
    state.loading = true;
    state.error = null;
  },

  [types.GET_TICKERS_SUCCESS](state, tickers) {
    state.byId = mapKeys(tickers, ticker => ticker.id);
    state.loading = false;
    state.error = null;
  },

  [types.GET_TICKERS_FAILED](state, { error }) {
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
