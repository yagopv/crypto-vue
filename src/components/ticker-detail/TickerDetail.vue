<template>
  <div>
    <div v-if="ohlcAndVolume.ohlc.length">
      <candlestick :ohlc="ohlcAndVolume.ohlc" :volume="ohlcAndVolume.volume"></candlestick>
    </div>
  </div>
</template>

<script>
import Candlestick from '@/components/common/candlestick/Candlestick';
import { mapGetters } from 'vuex';

export default {
  name: 'TickerDetail',
  computed: {
    ...mapGetters({
      tickers: 'tickers'
    }),
    getSymbol: function() {
      return this.$store.getters.getSymbol(this.$route.params.id);
    },
    ohlcAndVolume: function() {
      const symbol = this.$store.getters.getSymbol(this.$route.params.id);
      return this.$store.getters.getOhlcAndVolumes(symbol);
    }
  },
  created() {
    this.$store.dispatch('getHistoDay', this.$route.params.id);
  },
  components: { Candlestick }
};
</script>
