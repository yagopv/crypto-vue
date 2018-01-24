<template>
  <router-view />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Tickers',
  created() {
    this.$store.dispatch('getTickers');
  }
};
</script>
