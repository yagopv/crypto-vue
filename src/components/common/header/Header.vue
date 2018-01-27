<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <router-link to="/tickers/coin-list" class="navbar-brand">Crypto-Vue</router-link>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    @click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div id="navbarSupportedContent" class="navbar-collapse" :class="{collapse: navBarCollapsed}">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" :class="{'active': subIsActive('/tickers/coin-list')}">
        <router-link to="/tickers/coin-list" class="nav-link">Coin list</router-link>
      </li>
      <li class="nav-item" :class="{'active': subIsActive('/tickers/maps')}">
        <router-link to="/tickers/maps" class="nav-link">Market capitalization maps</router-link>
      </li>
      <li class="nav-item" :class="{'active': subIsActive('/about')}">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
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

export default {
  name: 'Header',
  props: ['inputChange'],
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
  }
};
</script>
