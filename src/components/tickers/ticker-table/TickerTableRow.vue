<template>
  <tr @click="selectTicker(ticker)">
    <th scope="row">{{ ticker.rank }}</th>
    <td>{{ ticker.name }}</td>
    <td>{{ ticker.symbol }}</td>
    <td>{{ ticker.price_usd }}</td>
    <td>{{ ticker.market_cap_usd | formatNumber }}</td>
    <td>{{ ticker.available_supply | formatNumber }}</td>
    <td>{{ ticker.total_supply | formatNumber }}</td>
    <td>{{ ticker.percent_change_1h }}</td>
    <td>{{ ticker.percent_change_24h }}</td>
    <td>{{ ticker.percent_change_7d }}</td>
  </tr>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'TickerTableRow',
  props: ['ticker', 'selectTicker'],
  filters: {
    formatNumber: value => {
      return numeral(value).format('0.0a');
    }
  }
};
</script>
