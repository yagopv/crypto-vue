<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <ticker-toolbar :is-treeview-visible="true" :toggle-treeview-visibility="toggleTreeviewVisibility"></ticker-toolbar>
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
  data: function () {
    return {
      isTreeviewVisible: true
    }
  },
  methods: function () {
    toggleTreeviewVisibility: (isVisible) => this.$store.dispatch('isTreeviewVisible', isVisible);
  },
  computed: mapGetters({
    tickers: 'byId',
    isTreeviewVisible: 'isTreeviewVisible'
  }),
  created() {
    this.$store.dispatch('getTickers');
  },
  components: { TickerTable, TickerTreeMap, TickerToolbar }
};
</script>
