<template>
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col">
        <ticker-toolbar
          :is-treemap-visible="isTreemapVisible"
          :toggle-treemap-visibility="toggleTreemapVisibility"
          :selected-treemap="selectedTreemap"
          :select-treemap="selectTreemap">
        </ticker-toolbar>
      </div>
    </div>
    <div class="row" v-if="!isTreemapVisible">
      <div class="col">
        <ticker-table
          :tickers="listData"
          :select-ticker="selectTicker">
        </ticker-table>
      </div>
    </div>
    <div class="row" v-show="selectedTreemap === 0">
      <div class="col">
        <ticker-tree-map
          :tickers="biggerCoins"
          :height="900"
          v-if="biggerCoins.length">
        </ticker-tree-map>
      </div>
    </div>
    <div class="row" v-show="selectedTreemap === 1">
      <div class="col">
        <ticker-tree-map
          :tickers="largeCoins"
          :height="900"
          v-if="largeCoins.length">
        </ticker-tree-map>
      </div>
    </div>
    <div class="row" v-show="selectedTreemap === 2">
      <div class="col">
        <ticker-tree-map
          :tickers="mediumCoins"
          :height="2000"
          v-if="mediumCoins.length">
        </ticker-tree-map>
      </div>
    </div>
    <div class="row" v-show="selectedTreemap === 3">
      <div class="col">
        <ticker-tree-map
          :tickers="smallCoins"
          :height="2000"
          v-if="smallCoins.length">
        </ticker-tree-map>
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
    toggleTreemapVisibility: function(isVisible) {
      this.$store.dispatch('toggleTreeVisibility', isVisible);
    },
    selectTicker: function(ticker) {
      this.$router.push({
        name: 'TickerDetail',
        params: { id: ticker.id }
      });
    },
    selectTreemap: function(option) {
      this.$store.dispatch('selectTreemap', option);
    }
  },
  computed: {
    ...mapGetters({
      listData: 'byId',
      isTreemapVisible: 'isTreemapVisible',
      selectedTreemap: 'getSelectedTreemap'
    }),
    biggerCoins: function() {
      return this.$store.getters.getTreemapData(1000000000, undefined);
    },
    largeCoins: function() {
      return this.$store.getters.getTreemapData(100000000, 1000000000);
    },
    mediumCoins: function() {
      return this.$store.getters.getTreemapData(1000000, 100000000);
    },
    smallCoins: function() {
      return this.$store.getters.getTreemapData(undefined, 1000000);
    }
  },
  created() {
    this.$store.dispatch('getTickers');
  },
  components: { TickerTable, TickerTreeMap, TickerToolbar }
};
</script>
