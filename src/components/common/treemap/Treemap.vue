<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
export default {
  props: ['tickers', 'height'],
  data: function() {
    return {
      options: {}
    };
  },
  watch: {
    tickers: function(val) {
      console.log(val);
      this.$refs.highcharts.chart.update({
        series: [
          {
            data: val
          }
        ],
        chart: {
          height: this.height
        }
      });
    }
  },
  mounted: function() {
    this.options = {
      series: [
        {
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          allowDrillToNode: true,
          animationLimit: this.tickers.length,
          layoutStartingDirection: 'horizontal',
          turboThreshold: 2000,
          colorByPoint: true,
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
        height: this.height
      }
    };
  }
};
</script>
