<template>
  <tr class="pointer" @click="selectTicker(ticker)">
    <th scope="row">
      <img class="img-responsive" :src="getImageUrl(ticker)" />
    </th>
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
    <td>{{ ticker.price_usd | format('$ 0.[00]') }}</td>
    <td>{{ ticker.market_cap_usd | format('$ 0.[00]a') }}</td>
    <td>{{ ticker.available_supply | format('$ 0.[00]a') }}</td>
    <td>{{ ticker.total_supply | format('0.[00]a') }}</td>
    <td>
      <span :class="colorizePercentChange(ticker.percent_change_1h)">
        {{ ticker.percent_change_1h | percentage }}
      </span>
    </td>
    <td>
      <span :class="colorizePercentChange(ticker.percent_change_24h)">
        {{ ticker.percent_change_24h | percentage }}
      </span>
    </td>
    <td>
      <span :class="colorizePercentChange(ticker.percent_change_7d)">
        {{ ticker.percent_change_7d | percentage }}
      </span>
    </td>
  </tr>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'TickerTableRow',
  props: ['ticker', 'selectTicker'],
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
.img-responsive {
  height: 24px;
}
</style>
