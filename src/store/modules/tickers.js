import * as types from '../mutation-types';
import { getTickers, getCoinList } from '@/api/tickers';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import orderBy from 'lodash/orderBy';
import inRange from 'lodash/inRange';
import filter from 'lodash/filter';

// Initial state
const state = {
  byId: {},
  sortKey: { rank: 'Number' },
  sortOrder: 'asc',
  searchValue: ''
};

// getters
const getters = {
  getTickersSortBy: function() {
    const prop = Object.keys(state.sortKey)[0];
    if (state.sortKey[prop] === 'Number') {
      return orderBy(
        filter(
          map(state.byId, ticker => ticker),
          ticker =>
            (state.searchValue &&
              ticker.name
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())) ||
            !state.searchValue
        ),
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
      return orderBy(
        filter(
          map(state.byId, ticker => ticker),
          ticker =>
            (state.searchValue &&
              ticker.name
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())) ||
            !state.searchValue
        ),
        [prop],
        [state.sortOrder]
      );
    }
  },
  getTickerById: state => id => state.byId[id],
  getTickers: state => state.byId,
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
      const tickers = getTickers();
      const coinList = getCoinList();
      const tickersResult = await tickers;
      const coinListResult = await coinList;
      if (
        tickersResult.data &&
        coinListResult.data &&
        coinListResult.data['Data']
      ) {
        tickersResult.data.forEach(ticker => {
          ticker.meta = coinListResult.data['Data'][ticker.symbol];
          if (ticker.symbol === 'MIOTA') {
            ticker.meta = coinListResult.data['Data']['IOT'];
          }
        });
      }
      commit(types.GET_TICKERS_SUCCESS, tickersResult.data);
    } catch (error) {
      commit(types.GET_TICKERS_FAILED, error);
    }
  },

  sortBy({ commit }, { key, type }) {
    commit(types.SORT_TICKERS, { key, type });
  },

  searchTickers({ commit }, searchText) {
    commit(types.SET_SEARCH, searchText);
  }
};

// mutations
const mutations = {
  [types.GET_TICKERS_SUCCESS](state, tickers) {
    state.byId = mapKeys(tickers, ticker => ticker.id);
  },

  [types.SORT_TICKERS](state, { key, type }) {
    if (state.sortKey[key]) {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = { [key]: type };
      state.sortOrder = 'asc';
    }
  },

  [types.SET_SEARCH](state, searchText) {
    state.searchValue = searchText;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
