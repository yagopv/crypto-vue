<template>
  <router-view />
</template>

<script>
export default {
  name: 'Tickers',
  created() {
    this.$store.dispatch('getTickers');
  }
};
</script>
