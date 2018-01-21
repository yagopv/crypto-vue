<template>
  <div id="app">
    <Header />
    <div id="page">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './layout/Header';

export default {
  name: 'app',
  components: { Header }
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
