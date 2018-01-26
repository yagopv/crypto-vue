<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import { treemapOptions } from '@/utils/highcharts';

export default {
  props: ['tickers', 'height'],
  data: function() {
    return {
      options: treemapOptions
    };
  },
  watch: {
    tickers: function(tickers) {
      this.$refs.highcharts.chart.update({
        series: [
          {
            animationLimit: tickers.length,
            data: tickers
          }
        ],
        chart: {
          height: this.height
        }
      });
    }
  }
};
</script>
