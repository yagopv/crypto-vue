import * as types from '../mutation-types';

// Initial state
const state = {
  loading: false,
  error: null
};

// getters
const getters = {
  isLoading: state => state.loading,
  getError: state => state.error
};

// actions
const actions = {
  setLoading: ({ commit }, isLoading) => {
    commit(types.SET_LOADING, isLoading);
  },
  setError: ({ commit }, error) => {
    commit(types.SET_ERROR, error);
  }
};

// mutations
const mutations = {
  [types.SET_LOADING](state, isLoading) {
    state.loading = isLoading;
  },

  [types.SET_ERROR](state, error) {
    state.error = error;
  },

  [types.GET_TICKERS](state) {
    state.loading = true;
    state.error = null;
  },

  [types.GET_TICKERS_SUCCESS](state) {
    state.loading = false;
    state.error = null;
  },

  [types.GET_TICKERS_FAILED](state, error) {
    state.loading = false;
    state.error = error;
  },

  [types.GET_HISTO_DAY](state) {
    state.loading = true;
    state.error = null;
  },

  [types.GET_HISTO_DAY_SUCCESS](state, { data, symbol }) {
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
