import Vue from 'vue';
import Vuex from 'vuex';
import tickers from './modules/tickers';
import createLogger from './plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    tickers
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
