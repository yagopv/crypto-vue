<template>
  <div id="app">
    <Header />
    <div id="page">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </div>
    <Loader :is-loading="isLoading"/>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header';
import Loader from '@/components/common/loader/Loader';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: { Header, Loader },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      error: 'getError'
    })
  }
};
</script>

<style>
body {
  background-color: #343a40 !important; /* Avoid reboot.css overriding background color */
  overflow-x: hidden;
}
</style>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}

body {
  padding-top: 4rem;
}

.pointer {
  cursor: pointer;
}
</style>
