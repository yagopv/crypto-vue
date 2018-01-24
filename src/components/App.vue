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

<style scoped>
#page {
  padding-top: 30px;
}
</style>

<style lang="scss">
@import '../sass/app-bootstrap.scss';
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}
</style>
