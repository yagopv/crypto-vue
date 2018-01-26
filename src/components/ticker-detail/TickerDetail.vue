<template>
  <div id="ticker-detail" class="container-fluid">
    <div class="row">
      <div class="col">
        <coin-info v-if="ticker" :ticker="ticker"></coin-info>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-dark">
            Monthy
          </button>
          <button
            type="button"
            class="btn btn-dark">
            Weekly
          </button>
          <button
            type="button"
            class="btn btn-dark">
            Daily
          </button>
          <button
            type="button"
            class="btn btn-dark">
            4 Hour
          </button>
          <button
            type="button"
            class="btn btn-dark">
            Hourly
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div v-if="ohlcAndVolume.ohlc.length">
          <candlestick
            :ticker="ticker"
            :ohlc="ohlcAndVolume.ohlc"
            :volume="ohlcAndVolume.volume">
          </candlestick>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Candlestick from '@/components/common/candlestick/Candlestick';
import CoinInfo from './coin-info/CoinInfo';

import { mapGetters } from 'vuex';

export default {
  name: 'TickerDetail',
  computed: {
    ...mapGetters({
      tickers: 'tickers'
    }),
    ticker: function() {
      return this.$store.getters.getTickerById(this.$route.params.id);
    },
    ohlcAndVolume: function() {
      const ticker = this.$store.getters.getTickerById(this.$route.params.id);
      if (ticker) {
        return this.$store.getters.getOhlcAndVolumes(ticker.symbol);
      }
      return {
        ohlc: [],
        volume: []
      };
    }
  },
  created() {
    this.$store.dispatch('getHistoDay', this.$route.params.id);
  },
  components: { Candlestick, CoinInfo }
};
</script>

<style lang="scss" scoped>
.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
