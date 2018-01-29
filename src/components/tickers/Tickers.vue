<template>
  <router-view />
</template>

<script>
import { schedule } from '@/utils/helpers';

export default {
  name: 'Tickers',
  created() {
    schedule(() => this.$store.dispatch('getTickers'), 600000);
  }
};
</script>
