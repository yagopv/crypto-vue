import * as types from '../mutation-types';

// initial state
// shape: [{ id, quantity }]
const state = {
  cryptos: [],
  loading: false
};

// getters
const getters = {
  cryptos: state => state.cryptos,
  isLoading: state => state.isLoading
};

// actions
const actions = {
  getCryptos({ commit }) {}
};

// mutations
const mutations = {
  [types.GET_CRYPTOS](state) {},

  [types.GET_CRYPTOS_SUCCESS](state, { cryptos }) {},

  [types.GET_CRYPTOS_FAILED](state, status) {}
};

export default {
  state,
  getters,
  actions,
  mutations
};
