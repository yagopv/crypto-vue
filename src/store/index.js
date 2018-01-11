import Vue from 'vue';
import Vuex from 'vuex';
import cryptos from './modules/cryptos';
import createLogger from './plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    cryptos
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
