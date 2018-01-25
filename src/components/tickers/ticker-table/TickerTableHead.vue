<template>
    <tr>
      <th class="pointer" scope="col" @click="sortBy({ key: 'rank', type: 'Number'})"><b>#</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'name', type: 'String'})"><b>Coin name</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'symbol', type: 'String'})"><b>Symbol</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'price_usd', type: 'Number'})"><b>Price</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'market_cap_usd', type: 'Number'})">M<b>arket Cap</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'available_supply', type: 'Number'})"><b>Available supply</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'total_supply', type: 'Number'})"><b>Total supply</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'percent_change_1h', type: 'Number'})"><b>Change (1h)</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'percent_change_24h', type: 'Number'})"><b>Change (24h)</b></th>
      <th class="pointer" scope="col" @click="sortBy({ key: 'percent_change_7d', type: 'Number'})"><b>Change (7d)</b></th>
    </tr>
</template>

<script>
export default {
  props: ['sortBy']
};
</script>
