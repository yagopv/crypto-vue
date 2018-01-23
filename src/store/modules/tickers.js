import Highcharts from 'highcharts';
import * as types from '../mutation-types';
import { getTickers } from '@/api/tickers';
import mapKeys from 'lodash/mapKeys';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import orderBy from 'lodash/fp/orderBy';
import inRange from 'lodash/inRange';
import * as _ from 'lodash';

// Initial state
const state = {
  byId: {},
  loading: false,
  error: null,
  isTreeviewVisible: false
};

// getters
const getters = {
  byId: state =>
    flow(map(ticker => ticker), orderBy([{ rank: Number }], ['asc']))(
      state.byId
    ),
  getSymbol: state => id => state.byId[id] && state.byId[id].symbol,
  tickers: state => state.byId,
  isLoading: state => state.isLoading,
  error: state => state.error,
  isTreeviewVisible: state => state.isTreeviewVisible,
  treeViewData: state => (
    minMarketCap,
    maxMarketCap = Number.MAX_SAFE_INTEGER
  ) => {
    return _.filter(state.byId, ticker => {
      const marketCap = parseInt(ticker.market_cap_usd);
      return inRange(marketCap, minMarketCap, maxMarketCap);
    }).map((ticker, index) => ({
      id: index,
      name: ticker.name,
      value: parseInt(ticker.market_cap_usd)
    }));
  }
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
