<template>
  <div class="table-responsive">
    <table class="table table-hover table-dark">
      <tbody>
        <tr class="pointer">
          <td class="d-none d-xl-table-cell">
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
            <b><span class="d-none d-lg-inline">CURRENT</span> PRICE: </b>
            {{ ticker.price_usd | format('$0.[00]') }}
          </td>
          <td class="text-center d-none d-lg-inline">
            <b><span class="d-none d-lg-inline">% CHANGE</span> 1h: </b>
            <span :class="colorizePercentChange(ticker.percent_change_1h)">
              {{ ticker.percent_change_1h | percentage }}
            </span>
          </td>
          <td class="text-center">
            <b><span class="d-none d-lg-inline">% CHANGE</span> 24h: </b>
            <span :class="colorizePercentChange(ticker.percent_change_24h)">
              {{ ticker.percent_change_24h | percentage }}
            </span>
          </td>
          <td class="text-center">
            <b><span class="d-none d-lg-inline">% CHANGE</span> 7d: </b>
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
import { format, percentage, uppercase } from '@/utils/filters';
import { colorizePercentChange, getImageUrl } from '@/utils/helpers';

export default {
  name: 'CoinInfo',
  props: ['ticker'],
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
