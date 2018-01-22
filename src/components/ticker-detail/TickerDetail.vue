<template>
  <div>
    <h1>TickerDetail</h1>
    <div v-if="ohlcAndVolume.ohlc">
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
    ohlcAndVolume: function() {
      return this.$store.getters.getOhlcAndVolumes(
        this.tickers[this.$route.params.id].symbol
      );
    }
  },
  created() {
    this.$store.dispatch(
      'getHistoDay',
      this.tickers[this.$route.params.id].symbol
    );
  },
  components: { Candlestick }
};
</script>
