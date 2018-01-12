import * as types from '../mutation-types';
import { getTickers } from '@/api/tickers';

// Initial state
const state = {
  tickers: [],
  loading: false,
  error: null
};

// getters
const getters = {
  tickers: state => state.tickers,
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
    state.tickers = tickers;
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
