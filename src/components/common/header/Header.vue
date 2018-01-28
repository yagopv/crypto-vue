<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <router-link to="/tickers/coin-list" class="navbar-brand"><b class="text-warning">Crypto-Vue</b></router-link>
  <button
    class="navbar-toggler"
    type="button"
    @click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div id="navbarSupportedContent" class="navbar-collapse" :class="{collapse: navBarCollapsed}">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" :class="{'active': subIsActive('/tickers/coin-list')}">
        <router-link to="/tickers/coin-list" class="nav-link">Coin list</router-link>
      </li>
      <li class="nav-item" :class="{'active': subIsActive('/tickers/maps')}">
        <router-link to="/tickers/maps" class="nav-link">Market Cap Maps</router-link>
      </li>
      <li class="nav-item" :class="{'active': subIsActive('/about')}">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
    <span class="d-none d-xl-block">
      <span class="text-light mr-2">Total Market:</span>
      <span class="text-success mr-2">{{ marketInfo.total_market_cap_usd | format('$0a') }}</span>
      <span class="text-light mr-2">24h Vol:</span>
      <span class="text-success mr-2">{{ marketInfo.total_24h_volume_usd | format('$0a') }}</span>
      <span class="text-light mr-2">BTC dominance:</span>
      <span class="text-success mr-5">{{ marketInfo.bitcoin_percentage_of_market_cap | percentage }}</span>
    </span>
    <form
      v-if="subIsActive('/tickers/coin-list')"
      class="form-inline my-2 my-lg-0">
      <input
        type="search"
        class="form-control mr-sm-2 text-light bg-dark"
        v-on:input="debounceInput"
        placeholder="Search"
        aria-label="Search">
    </form>
  </div>
</nav>
</template>

<script>
import debounce from 'lodash/debounce';
import { format, percentage } from '@/utils/filters';

export default {
  name: 'Header',
  props: ['inputChange', 'marketInfo'],
  data: function() {
    return {
      navBarCollapsed: true
    };
  },
  methods: {
    subIsActive: function(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    debounceInput: debounce(function(event) {
      this.inputChange(event.target.value);
    }, 500),
    toggleNavbar: function() {
      this.navBarCollapsed = !this.navBarCollapsed;
    }
  },
  filters: { format, percentage }
};
</script>
