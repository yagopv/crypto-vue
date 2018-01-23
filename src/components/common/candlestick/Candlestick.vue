<template>
  <highstock :options="options" ref="highstocks"></highstock>
</template>

<script>
export default {
  props: ['ohlc', 'volume'],
  data: function() {
    return {
      options: {}
    };
  },
  mounted: function() {
    this.options = {
      rangeSelector: {
        selected: 1
      },

      title: {
        text: 'AAPL Historical'
      },

      yAxis: [
        {
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'OHLC'
          },
          height: '60%',
          lineWidth: 2,
          resize: {
            enabled: true
          }
        },
        {
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'Volume'
          },
          top: '65%',
          height: '35%',
          offset: 0,
          lineWidth: 2
        }
      ],

      tooltip: {
        split: true
      },

      chart: {
        height: 800
      },

      series: [
        {
          type: 'candlestick',
          name: 'AAPL',
          data: this.ohlc
        },
        {
          type: 'column',
          name: 'Volume',
          data: this.volume,
          yAxis: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
