<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import * as _ from 'lodash';

export default {
  props: ['tickers'],
  data: function() {
    return {
      options: {}
    }
  },
  mounted: function() {
    this.options = {
      series: [
        {
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          allowDrillToNode: true,
          animationLimit: 1000,
          dataLabels: {
            enabled: false
          },
          levelIsConstant: false,
          levels: [
            {
              level: 1,
              dataLabels: {
                enabled: true
              },
              borderWidth: 3
            }
          ],
          data: _.take(this.tickers, 1000)
        }
      ],
      subtitle: {
        text:
          'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
      },
      title: {
        text: 'Crypto marketcap'
      }
    }
  }
};
</script>

<style lang="scss">

</style>
