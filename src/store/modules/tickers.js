import * as types from '../mutation-types';
import { getTickers } from '@/api/tickers';
import mapKeys from 'lodash/mapKeys';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import orderBy from 'lodash/fp/orderBy';
import * as _ from 'lodash';

// Initial state
const state = {
  byId: {},
  loading: false,
  error: null,
  isTreeviewVisible: true
};

// getters
const getters = {
  byId: state =>
    flow(map(ticker => ticker), orderBy([{ rank: Number }], ['asc']))(
      state.byId
    ),
  isLoading: state => state.isLoading,
  error: state => state.error,
  isTreeviewVisible: state => state.isTreeviewVisible,
  treeViewData: function(state) {
    const monsters = _.filter(state.byId, ticker => parseInt(ticker.market_cap_usd) > 1000000000)
                      .map((ticker, index) => ({ id: `id-1-${index}`, name: ticker.name, parent: 'id-1', value: parseInt(ticker.market_cap_usd) }));
    const big = _.filter(state.byId, ticker => parseInt(ticker.market_cap_usd) > 10000000 && parseInt(ticker.market_cap_usd) <= 1000000000)
                      .map((ticker, index) => ({ id: `id-2-${index}`, name: ticker.name, parent: 'id-2', value: parseInt(ticker.market_cap_usd) }));
    const medium = _.filter(state.byId, ticker => parseInt(ticker.market_cap_usd) > 100000 && parseInt(ticker.market_cap_usd) <= 100000000)
                      .map((ticker, index) => ({ id: `id-3-${index}`, name: ticker.name, parent: 'id-3', value: parseInt(ticker.market_cap_usd) }));
    const small = _.filter(state.byId, ticker => parseInt(ticker.market_cap_usd) <= 100000)
                      .map((ticker, index) => ({ id: `id-4-${index}`, name: ticker.name, parent: 'id-4', value: parseInt(ticker.market_cap_usd) }));

    let result = [];

    result.push({
      name: '>10 billion',
      id: 'id-1'
    }, {
      name: '>10 million - <= 10 billion',
      id: 'id-2'
    }, {
      name: '>1 million - <= 10 million',
      id: 'id-3'
    }, {
      name: '<1 million',
      id: 'id-4'
    })

    result = result.concat(monsters);
    result = result.concat(big);
    result = result.concat(medium);
    result = result.concat(small);

    console.log(result);
    return result;
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
