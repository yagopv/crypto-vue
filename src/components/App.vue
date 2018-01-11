<template>
  <div id="app">
    <Header />
    <div id="page">
      <router-view/>
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
</style>
