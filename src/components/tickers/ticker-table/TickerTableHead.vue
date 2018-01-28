<template>
    <tr>
      <th class="pointer d-none d-xl-table-cell" scope="col"></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'name', type: 'String'})">
        <b class="d-lg-none">Coin</b>
        <b class="d-none d-lg-block">Coin name</b>
      </th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'symbol', type: 'String'})">
        <b>Symbol</b>
      </th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'price_usd', type: 'Number'})">
        <b>Price</b>
      </th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'market_cap_usd', type: 'Number'})">
        <b class="d-lg-none">M.Cap</b>
        <b class="d-none d-lg-block">Market Cap</b>
      </th>
      <th class="pointer d-none d-xl-table-cell" scope="col" @click="sortBy({ key: 'available_supply', type: 'Number'})">
        <b>Available Supply</b>
      </th>
      <th class="pointer d-none d-xl-table-cell" scope="col" @click="sortBy({ key: 'total_supply', type: 'Number'})">
        <b>Total supply</b>
      </th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'percent_change_1h', type: 'Number'})">
        <b class="d-lg-none">1h</b>
        <b class="d-none d-lg-block">Change (1h)</b>
      </th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'percent_change_24h', type: 'Number'})">
        <b class="d-lg-none">24h</b>
        <b class="d-none d-lg-block">Change (24h)</b>
      </th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'percent_change_7d', type: 'Number'})">
        <b class="d-lg-none">7d</b>
        <b class="d-none d-lg-block">Change (7d)</b>
      </th>
    </tr>
</template>

<script>
export default {
  props: ['sortBy']
};
</script>
