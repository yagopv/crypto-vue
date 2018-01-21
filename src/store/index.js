import Vue from 'vue';
import Vuex from 'vuex';
import tickers from './modules/tickers';
import histodata from './modules/histodata';
import createLogger from './plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    tickers,
    histodata
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
