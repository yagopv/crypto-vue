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
  isTreemapVisible: false,
  selectedTreemap: 0
};

// getters
const getters = {
  getTickersByRank: state =>
    flow(map(ticker => ticker), orderBy([{ rank: Number }], ['asc']))(
      state.byId
    ),
  getSymbol: state => id => state.byId[id] && state.byId[id].symbol,
  getTickers: state => state.byId,
  getSelectedTreemap: state => state.selectedTreemap,
  getTreemapData: state => (
    minMarketCap = 0,
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
    commit(types.TOGGLE_TREEMAP_VISIBILITY, isVisible);
  },

  selectTreemap({ commit }, option) {
    commit(types.SELECT_TREEMAP, option);
  }
};

// mutations
const mutations = {
  [types.GET_TICKERS_SUCCESS](state, tickers) {
    state.byId = mapKeys(tickers, ticker => ticker.id);
  },

  [types.TOGGLE_TREEMAP_VISIBILITY](state, isVisible) {
    state.isTreemapVisible = isVisible;
  },

  [types.SELECT_TREEMAP](state, option) {
    state.selectedTreemap = option;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
