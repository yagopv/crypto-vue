<template>
  <tr class="pointer" @click="selectTicker(ticker)">
    <th class="d-none d-xl-table-cell" scope="row">
      <img class="img-fluid" :src="getImageUrl(ticker)" />
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
    <td>{{ ticker.price_usd | format('$0.[00]') }}</td>
    <td>{{ ticker.market_cap_usd | format('$0.[00]a') }}</td>
    <td class="d-none d-xl-table-cell">{{ ticker.available_supply | format('$0.[00]a') }}</td>
    <td class="d-none d-xl-table-cell">{{ ticker.total_supply | format('0.[00]a') }}</td>
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
import { format, percentage, uppercase } from '@/utils/filters';
import { colorizePercentChange, getImageUrl } from '@/utils/helpers';

export default {
  name: 'TickerTableRow',
  props: ['ticker', 'selectTicker'],
  methods: { colorizePercentChange, getImageUrl },
  filters: { format, percentage, uppercase }
};
</script>

<style lang="scss" scoped>
.img-fluid {
  height: 24px;
  margin-bottom: 3px;
}
</style>
