import Vue from 'vue';
import Vuex from 'vuex';
import VueHighcharts from 'vue-highcharts';
import infiniteScroll from 'vue-infinite-scroll'

import App from './components/App';
import store from './store';
import router from './router';

import Highcharts from 'highcharts';
import loadTheme from './utils/HighchartsTheme';
import loadHeatmap from 'highcharts/modules/heatmap';
import loadTreemap from 'highcharts/modules/treemap';
import loadStock from 'highcharts/modules/stock';

import fontawesome from '@fortawesome/fontawesome';
import {
  faList,
  faChartPie,
  faSync
} from '@fortawesome/fontawesome-free-solid';

loadStock(Highcharts);
loadHeatmap(Highcharts);
loadTreemap(Highcharts);
loadTheme();

fontawesome.library.add(faList, faChartPie, faSync);

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueHighcharts, { Highcharts });
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
