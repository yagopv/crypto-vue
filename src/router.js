import Vue from 'vue';
import Router from 'vue-router';

import TickerTable from '@/components/tickers/TickerTable';
import TickerTreeMap from '@/components/ticker-treemap/TickerTreeMap';
import TickerDetail from '@/components/ticker-detail/TickerDetail';
import About from '@/components/about/About';
import NotFound from '@/components/not-found/NotFound';

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
      component: TickerTable,
      meta: { title: 'Coin List' }
    },
    {
      path: '/ticker/:id',
      name: 'TickerDetail',
      component: TickerDetail,
      meta: { title: 'Ticker Detail' }
    },
    {
      path: '/market-cap-maps',
      component: TickerTreeMap,
      meta: { title: 'Market Capitalization Maps' }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { title: 'About' }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: 'Page not found' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
