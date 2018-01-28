import * as types from '../mutation-types';
import { getGlobalMarketInfo } from '@/api/api';

// Initial state
const state = {
  marketInfo: {}
};

// getters
const getters = {
  getMarketInfo: state => state.marketInfo
};

// actions
const actions = {
  async getGlobalMarketInfo({ commit, dispatch }) {
    try {
      commit(types.GET_GLOBAL_MARKET_DATA);
      const { data } = await getGlobalMarketInfo();
      commit(types.GET_GLOBAL_MARKET_DATA_SUCCESS, data);
    } catch (error) {
      commit(types.GET_GLOBAL_MARKET_DATA_FAILED, error);
    }
  }
};

// mutations
const mutations = {
  [types.GET_GLOBAL_MARKET_DATA_SUCCESS](state, data) {
    state.marketInfo = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
