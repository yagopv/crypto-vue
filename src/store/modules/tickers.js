import * as types from '../mutation-types';
import { getTickers } from '@/api/tickers';
import { mapKeys } from 'lodash';
import { flow, map, orderBy } from 'lodash/fp';

// Initial state
const state = {
  byId: {},
  loading: false,
  error: null,
  isTreeviewVisible: true
};

// getters
const getters = {
  byId: state => flow(map(ticker => ticker), orderBy('rank'))(state.byId),
  isLoading: state => state.isLoading,
  error: state => state.error,
  isTreeviewVisible: state => state.isTreeviewVisible
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
  },
  toggleTreeVisibility({ commit }, isVisible) {
    commit(types.TOGGLE_TREEVIEW_VISIBILITY, isVisible);
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

  [types.GET_TICKERS_FAILED](state, error) {
    state.loading = false;
    state.error = error;
  },

  [types.TOGGLE_TREEVIEW_VISIBILITY](state, isVisible) {
    state.isTreeviewVisible = isVisible;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
