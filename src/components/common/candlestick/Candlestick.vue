<template>
  <highstock :options="options" ref="highstocks"></highstock>
</template>

<script>
export default {
  props: ['ticker', 'ohlc', 'volume'],
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
        text: ''
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
        height: 700
      },
      plotOptions: {
        candlestick: {
          color: '#dc3545',
          upColor: '#28a745'
        }
      },
      series: [
        {
          type: 'candlestick',
          name: this.ticker.name,
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
