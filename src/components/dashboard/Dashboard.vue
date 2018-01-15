<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <ticker-toolbar></ticker-toolbar>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ticker-table :tickers="tickers"></ticker-table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ticker-tree-map :tickers="tickers"></ticker-tree-map>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TickerTable from './TickerTable';
import TickerTreeMap from './TickerTreeMap';
import TickerToolbar from './TickerToolbar';

export default {
  name: 'Dashboard',
  computed: mapGetters({
    tickers: 'tickers'
  }),
  created() {
    this.$store.dispatch('getTickers');
  },
  components: { TickerTable, TickerTreeMap, TickerToolbar }
};
</script>
