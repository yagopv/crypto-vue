<template>
  <highcharts :options="options"></highcharts>
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
          data: [
            {
              name: '>10 billions',
              id: 'id-1',
              color: Highcharts.getOptions().colors[0]
            },
            {
              id: 'id-1-1',
              name: 'bitcoin',
              parent: 'id-1',
              value: 2,
              color: Highcharts.getOptions().colors[0]
            },
            {
              id: 'id-1-2',
              name: 'ethereum',
              parent: 'id-1',
              value: 1,
              color: Highcharts.getOptions().colors[0]
            },
            {
              id: 'id-1-3',
              name: 'xrp',
              parent: 'id-1',
              value: 1,
              color: Highcharts.getOptions().colors[0]
            },
            {
              name: '<10 billions',
              id: 'id-2',
              color: Highcharts.getOptions().colors[1]
            },
            {
              id: 'id-2-1',
              name: 'Bitcoin Cash',
              parent: 'id-2',
              value: 7,
              color: Highcharts.getOptions().colors[1]
            },
            {
              id: 'id-2-2',
              name: 'Stellar',
              parent: 'id-2',
              value: 3,
              color: Highcharts.getOptions().colors[1]
            },
            {
              id: 'id-2-3',
              name: 'Cardano',
              parent: 'id-2',
              value: 1,
              color: Highcharts.getOptions().colors[1]
            },
            {
              name: '<5 billions',
              id: 'id-3',
              color: Highcharts.getOptions().colors[2]
            },
            {
              id: 'id-3-1',
              name: 'Bitcoin Cash',
              parent: 'id-3',
              value: 7,
              color: Highcharts.getOptions().colors[2]
            },
            {
              id: 'id-3-2',
              name: 'Stellar',
              parent: 'id-3',
              value: 3,
              color: Highcharts.getOptions().colors[2]
            },
            {
              id: 'id-3-3',
              name: 'Cardano',
              parent: 'id-3',
              value: 1,
              color: Highcharts.getOptions().colors[2]
            }
          ]
        }
      ],
      subtitle: {
        text:
          'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
      },
      title: {
        text: 'Global Mortality Rate 2012, per 100 000 population'
      }
    };
  }
};
</script>

<style lang="scss">

</style>
