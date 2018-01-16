<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <ticker-toolbar :is-treeview-visible="isTreeviewVisible" :toggle-treeview-visibility="toggleTreeviewVisibility"></ticker-toolbar>
      </div>
    </div>
    <div class="row" v-if="!isTreeviewVisible">
      <div class="col">
        <ticker-table :tickers="listData"></ticker-table>
      </div>
    </div>
    <div class="row" v-if="isTreeviewVisible">
      <div class="col">
        <ticker-tree-map :tickers="treeViewData"></ticker-tree-map>
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
  methods: {
    toggleTreeviewVisibility: function(isVisible) {
      this.$store.dispatch('toggleTreeVisibility', isVisible);
    }
  },
  computed: mapGetters({
    listData: 'byId',
    isTreeviewVisible: 'isTreeviewVisible',
    treeViewData: 'treeViewData'
  }),
  created() {
    this.$store.dispatch('getTickers');
  },
  components: { TickerTable, TickerTreeMap, TickerToolbar }
};
</script>
