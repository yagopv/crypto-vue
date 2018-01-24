<template>
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col text-center">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-light"
            :class="{active: selectedTreemap === 0}"
            @click="selectTreemap(0)">
            Above the billion
          </button>
          <button
            type="button"
            class="btn btn-light"
            :class="{active: selectedTreemap === 1}"
            @click="selectTreemap(1)">
            100 million to 1 billion
          </button>
          <button
            type="button"
            class="btn btn-light"
            :class="{active: selectedTreemap === 2}"
            @click="selectTreemap(2)">
            1 million to 100 million
          </button>
          <button
            type="button"
            class="btn btn-light"
            :class="{active: selectedTreemap === 3}"
            @click="selectTreemap(3)">
            Under 1 million
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" v-show="selectedTreemap === 0">
        <treemap
          :tickers="biggerCoins"
          :height="900"
          v-if="biggerCoins.length">
        </treemap>
      </div>
      <div class="col" v-show="selectedTreemap === 1">
        <treemap
          :tickers="largeCoins"
          :height="900"
          v-if="largeCoins.length">
        </treemap>
      </div>
      <div class="col" v-show="selectedTreemap === 2">
        <treemap
          :tickers="mediumCoins"
          :height="2000"
          v-if="mediumCoins.length">
        </treemap>
      </div>
      <div class="col" v-show="selectedTreemap === 3">
        <treemap
          :tickers="smallCoins"
          :height="2000"
          v-if="smallCoins.length">
        </treemap>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Treemap from '@/components/common/treemap/Treemap';

export default {
  name: 'TickerTreemap',
  computed: {
    ...mapGetters({
      tickers: 'byId',
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
  methods: {
    selectTreemap: function(option) {
      this.$store.dispatch('selectTreemap', option);
    }
  },
  components: { Treemap }
};
</script>
