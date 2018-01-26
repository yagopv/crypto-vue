import Vue from 'vue';
import Router from 'vue-router';
import Tickers from '@/components/tickers/Tickers';
import TickerTable from '@/components/tickers/ticker-table/TickerTable';
import TickerTreeMap from '@/components/tickers/ticker-treemap/TickerTreeMap';
import TickerDetail from '@/components/ticker-detail/TickerDetail';
import About from '@/components/about/About';

Vue.use(Router);

const router = new Router({
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
        {
          path: 'coin-list',
          component: TickerTable,
          meta: { title: 'Coin List' }
        },
        {
          path: 'maps',
          component: TickerTreeMap,
          meta: { title: 'Market Capitalization Maps' }
        }
      ]
    },
    {
      path: '/ticker/:id',
      name: 'TickerDetail',
      component: TickerDetail,
      meta: { title: 'Ticker Detail' }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { title: 'About' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
