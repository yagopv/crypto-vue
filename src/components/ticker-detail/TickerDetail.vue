<template>
  <h1>TickerDetail</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TickerDetail',
  computed: mapGetters({
    tickers: 'tickers'
  }),
  created() {
    this.$store.dispatch(
      'getHistoDay',
      this.tickers[this.$route.params.id].symbol
    );
  }
};
</script>
