<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <router-link to="/tickers" class="navbar-brand">
    <b class="text-warning">Crypto-Vue</b>
  </router-link>
  <button
    class="navbar-toggler"
    type="button"
    @click="toggleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div id="navbarSupportedContent"
       class="navbar-collapse"
       :class="{collapse: navBarCollapsed}">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"
          :class="{'active': subIsActive('/tickers')}"
          @click="toggleNavbar">
        <router-link to="/tickers" class="nav-link">
          Coin list
        </router-link>
      </li>
      <li class="nav-item"
          :class="{'active': subIsActive('//market-cap-maps')}"
          @click="toggleNavbar">
        <router-link to="/market-cap-maps" class="nav-link">
          Market Cap Maps
        </router-link>
      </li>
      <li class="nav-item"
         :class="{'active': subIsActive('/about')}"
         @click="toggleNavbar">
        <router-link to="/about" class="nav-link">
          About
        </router-link>
      </li>
    </ul>
    <transition name="slide" >
      <form
        v-if="subIsActive('/tickers')"
        class="form-inline my-2 my-lg-0">
        <span class="d-none d-xl-block">
          <span class="text-light mr-2">Total Market:</span>
          <span class="text-success mr-2">
            {{ marketInfo.total_market_cap_usd | format('$0a') }}
          </span>
          <span class="text-light mr-2">24h Vol:</span>
          <span class="text-success mr-2">
            {{ marketInfo.total_24h_volume_usd | format('$0a') }}
          </span>
          <span class="text-light mr-2">BTC dominance:</span>
          <span class="text-success mr-5">
            {{ marketInfo.bitcoin_percentage_of_market_cap | percentage }}
          </span>
        </span>
        <input
          type="search"
          class="form-control mr-sm-2 text-light bg-dark"
          v-on:input="debounceInput"
          placeholder="Search"
          aria-label="Search">
      </form>
    </transition>
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

<style lang="scss" scoped>
input {
  &.form-control {
    &:focus {
      border-color: #fff;
      box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    }
  }
}
@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slide-enter-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: slideInRight;
}
.slide-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: slideOutRight;
}
</style>
