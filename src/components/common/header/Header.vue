<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Crypto-Vue</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    }
  }
};
</script>

<style scoped>

</style>
