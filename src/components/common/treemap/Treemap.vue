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
    tickers: function(newTickers) {
      this.updateTree(newTickers);
    }
  },
  methods: {
    updateTree: function(tickers) {
      this.$refs.highcharts.chart.update(
        {
          series: [
            {
              animationLimit: this.tickers.length,
              data: this.tickers
            }
          ],
          chart: {
            height: this.height
          }
        },
        true
      );
    }
  },
  mounted: function() {
    this.updateTree(this.tickers);
  }
};
</script>
