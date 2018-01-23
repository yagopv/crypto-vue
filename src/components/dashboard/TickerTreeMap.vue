<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
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
          dataLabels: {
            enabled: false
          },
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
      subtitle: {
        text:
          'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
      },
      title: {
        text: 'Crypto marketcap'
      },
      chart: {
        height: 900
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
