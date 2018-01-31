<template>
  <div id="app">
    <Header :input-change="search" :market-info="marketInfo" />
    <alert
      v-if="error"
      title="Oooops!!"
      :error="error"
      :dismiss="dismiss"
      type="danger">
    </alert>
    <div id="page">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <Loader :is-loading="isLoading"/>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header';
import Loader from '@/components/common/loader/Loader';
import Alert from '@/components/common/alert/Alert';

import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      error: 'getError',
      marketInfo: 'getMarketInfo'
    })
  },
  created: function() {
    this.$store.dispatch('getGlobalMarketInfo');
  },
  methods: {
    search: function(searchText) {
      this.$store.dispatch('searchTickers', searchText);
    },
    dismiss: function() {
      this.$store.dispatch('setError', null);
    }
  },
  components: { Header, Loader, Alert }
};
</script>


<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

html {
  overflow-x: hidden;
}

@include media-breakpoint-up(xs) {
  html {
    font-size: 0.75rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 0.85rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 0.95rem;
  }
}

@include media-breakpoint-up(xl) {
  html {
    font-size: 1rem;
  }
}

body {
  padding-top: 3.5rem;
  background-color: #343a40 !important; /* Avoid reboot.css overriding background color */
  overflow-x: hidden;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}

.pointer {
  cursor: pointer;
}
</style>
