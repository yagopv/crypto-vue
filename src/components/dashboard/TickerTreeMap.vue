<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  props: ['tickers'],
  data: function() {
    return {
      options: {}
    };
  },
  mounted: function() {
    this.options = {
      series: [
        {
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          allowDrillToNode: true,
          animationLimit: this.tickers.length,
          turboThreshold: 2000,
          colorByPoint: true,
          dataLabels: {
            enabled: false
          },
          cursor: 'pointer',
          levelIsConstant: false,
          point: {
            events: {
              click: event => console.log(event)
            }
          },
          tooltip: {
            valueDecimals: 2,
            valuePrefix: '$',
            valueSuffix: ' USD'
            // pointFormatter: function () {}
          },
          levels: [
            {
              level: 1,
              dataLabels: {
                enabled: true,
                color: '#FFF',
                font: 'bold 26px "Open Sans", sans-serif'
              },
              borderWidth: 3
            }
          ],
          data: this.tickers
        }
      ],
      title: {
        text: ''
      },
      chart: {
        height: 600
      }
    };
  }
};
</script>

<style lang="scss">
.highcharts-container {
  height: 900px !important;
}
</style>
