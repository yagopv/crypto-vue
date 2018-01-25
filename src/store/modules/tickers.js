import * as types from '../mutation-types';
import { getTickers } from '@/api/tickers';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import orderBy from 'lodash/orderBy';
import inRange from 'lodash/inRange';
import filter from 'lodash/filter';

// Initial state
const state = {
  byId: {},
  isTreemapVisible: false,
  selectedTreemap: 0,
  sortKey: { rank: 'Number' },
  sortOrder: 'desc'
};

// getters
const getters = {
  getTickersSortBy: function() {
    const prop = Object.keys(state.sortKey)[0];
    let sorted = null;
    if (state.sortKey[prop] === 'Number') {
      sorted = orderBy(
        map(state.byId, ticker => ticker),
        function(ticker) {
          if (ticker[prop]) {
            return parseFloat(ticker[prop]);
          } else {
            return 0;
          }
        },
        [state.sortOrder]
      );
    } else {
      sorted = orderBy(
        map(state.byId, ticker => ticker),
        [prop],
        [state.sortOrder]
      );
    }
    return sorted;
  },
  getSymbol: state => id => state.byId[id] && state.byId[id].symbol,
  getTickers: state => state.byId,
  getSelectedTreemap: state => state.selectedTreemap,
  getTreemapData: state => (
    minMarketCap = 0,
    maxMarketCap = Number.MAX_SAFE_INTEGER
  ) => {
    return filter(state.byId, ticker => {
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
  },

  sortBy({ commit }, { key, type }) {
    commit(types.SORT_TICKERS, { key, type });
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
  },

  [types.SORT_TICKERS](state, { key, type }) {
    if (state.sortKey[key]) {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = { [key]: type };
      state.sortOrder = 'asc';
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
