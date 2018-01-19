import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/dashboard/Dashboard';
import TickerDetail from '@/components/ticker-detail/TickerDetail';
import About from '@/components/about/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
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
