<template>
  <tr>
    <th scope="row">{{ ticker.rank }}</th>
    <td>{{ ticker.name }}</td>
    <td>{{ ticker.symbol }}</td>
    <td>{{ ticker.price_usd }}</td>
    <td>{{ ticker.market_cap_usd }}</td>
    <td>{{ ticker.available_supply }}</td>
    <td>{{ ticker.total_supply }}</td>
    <td>{{ ticker.percent_change_1h }}</td>
    <td>{{ ticker.percent_change_24h }}</td>
    <td>{{ ticker.percent_change_7d }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TickerTableRow',
  props: ['ticker']
};
</script>
