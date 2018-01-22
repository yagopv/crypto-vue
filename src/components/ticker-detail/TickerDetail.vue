<template>
  <div>
    <h1>TickerDetail</h1>
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
    ohlcAndVolume: function() {
      return this.$store.getters.getOhlcAndVolumes(this.$route.params.id);
    }
  },
  created() {
    this.$store.dispatch(
      'getHistoDay',
      this.$route.params.id
    );
  },
  components: { Candlestick }
};
</script>
