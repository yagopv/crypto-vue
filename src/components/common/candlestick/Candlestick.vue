<template>
  <highstock :options="options" ref="highstocks"></highstock>
</template>

<script>
import * as _ from 'lodash';

export default {
  props: ['ohlc', 'volume'],
  data: function() {
    return {
      options: {}
    };
  },
  mounted: function() {
    const groupingUnits = [
      [
        'week', // unit name
        [1] // allowed multiples
      ],
      ['month', [1, 2, 3, 4, 6]]
    ];

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
