import * as types from '../mutation-types';
import { getHistoDay } from '@/api/histodata';

// Initial state
const state = {
  bySymbol: {}
};

// getters
const getters = {};

// actions
const actions = {
  async getHistoDay({ commit }, symbol) {
    try {
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
    state.bySymbol[symbol] = data;
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
