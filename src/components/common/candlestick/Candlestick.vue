<template>
  <highstock :options="options" ref="highstocks"></highstock>
</template>

<script>
import { candlestickOptions } from '@/utils/highcharts';

export default {
  props: ['ticker', 'ohlcData'],
  data: function() {
    return {
      options: candlestickOptions
    };
  },
  watch: {
    ohlcData: function(newOhlcData) {
      this.updateCandlestick(newOhlcData);
    }
  },
  methods: {
    updateCandlestick: function(ohlcData) {
      this.$refs.highstocks.chart.update(
        {
          series: [
            {
              name: this.ticker.symbol,
              data: ohlcData.ohlc
            },
            {
              type: 'column',
              name: 'Volume',
              data: ohlcData.volume,
              yAxis: 1
            }
          ]
        },
        true
      );
    },
    setChartHeight(event) {
      this.$refs.highstocks.chart.setSize(null, document.documentElement.clientHeight - 100);
    }
  },
  mounted: function() {
    this.updateCandlestick(this.ohlcData);
    this.$nextTick(function() {
      window.addEventListener('resize', this.setChartHeight);

      this.setChartHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setChartHeight);
  }
};
</script>


