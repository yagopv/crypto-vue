<template>
  <div id="ticker-detail" class="container-fluid">
    <div class="row">
      <div class="col pl-0 pr-0">
        <coin-info v-if="ticker" :ticker="ticker"></coin-info>
      </div>
    </div>
    <div class="row">
      <div class="col pl-0 pr-0">
        <div v-if="ohlcAndVolume.ohlc.length">
          <candlestick :ticker="ticker" :ohlcData="ohlcAndVolume"></candlestick>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Candlestick from '@/components/common/candlestick/Candlestick';
import CoinInfo from './coin-info/CoinInfo';
import * as constants from '@/utils/constants';

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
    const interval =
      this.$route.query.interval || constants.TickerDetailIntervals.DAY;
    this.$store.dispatch('getHistoData', {
      id: this.$route.params.id,
      interval
    });
  },
  components: { Candlestick, CoinInfo }
};
</script>
