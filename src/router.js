import Vue from 'vue';
import Router from 'vue-router';
import Tickers from '@/components/tickers/Tickers';
import TickerTable from '@/components/tickers/ticker-table/TickerTable';
import TickerTreeMap from '@/components/tickers/ticker-treemap/TickerTreeMap';
import TickerDetail from '@/components/ticker-detail/TickerDetail';
import About from '@/components/about/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tickers'
    },
    {
      path: '/tickers',
      name: 'Tickers',
      component: Tickers,
      children: [
        { path: '', redirect: 'coin-list' },
        { path: 'coin-list', component: TickerTable },
        { path: 'maps', component: TickerTreeMap }
      ]
    },
    {
      path: '/ticker/:id',
      name: 'TickerDetail',
      component: TickerDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
