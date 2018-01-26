<template>
  <div class="table-responsive">
    <table class="table table-hover table-dark">
      <tbody>
        <tr class="pointer">
          <td>
            <img class="img-fluid" :src="getImageUrl(ticker)" />
          </td>
          <td>
            <b>
              {{ ticker.name | uppercase }}
            </b>
          </td>
          <td>
            <b class="text-warning">
              {{ ticker.symbol }}
            </b>
          </td>
          <td class="text-center">
            <b>CURRENT PRICE: </b>
            {{ ticker.price_usd | format('$ 0.[00]') }}
          </td>
          <td class="text-center">
            <b>% CHANGE 1h: </b>
            <span :class="colorizePercentChange(ticker.percent_change_1h)">
              {{ ticker.percent_change_1h | percentage }}
            </span>
          </td>
          <td class="text-center">
            <b>% CHANGE 24h: </b>
            <span :class="colorizePercentChange(ticker.percent_change_24h)">
              {{ ticker.percent_change_24h | percentage }}
            </span>
          </td>
          <td class="text-center">
            <b>% CHANGE 7d: </b>
            <span :class="colorizePercentChange(ticker.percent_change_7d)">
              {{ ticker.percent_change_7d | percentage }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'CoinInfo',
  props: ['ticker'],
  methods: {
    colorizePercentChange: change =>
      change > 0 ? 'text-success' : 'text-danger',
    getImageUrl: ticker => {
      return ticker.meta && `http://cryptocompare.com${ticker.meta.ImageUrl}`;
    }
  },
  filters: {
    rank: value => `# ${value}`,
    format: (value, format) => {
      return numeral(value).format(format);
    },
    percentage: value => `${value}%`,
    uppercase: value => value.toUpperCase()
  }
};
</script>

<style lang="scss" scoped>
.img-fluid {
  height: 24px;
  margin-bottom: 3px;
}
</style>
