<template>
  <div id="treemaps" class="container-fluid">
    <div class="row mb-2 mt-5">
      <div class="col">
        <ul class="nav nav-pills justify-content-center">
          <li class="nav-item">
            <a href="#"
              class="nav-link text-light"
              :class="{active: selectedTreemap === 0}"
              @click="update(0)">
                Above the billion
            </a>
          </li>
          <li class="nav-item">
            <a href="#"
              class="nav-link text-light"
              :class="{active: selectedTreemap === 1}"
              @click="update(1)">
                100 million to 1 billion
            </a>
          </li>
          <li class="nav-item">
            <a href="#"
              class="nav-link text-light"
              :class="{active: selectedTreemap === 2}"
              @click="update(2)">
                1 million to 100 million
            </a>
          </li>
          <li class="nav-item">
            <a href="#"
              class="nav-link text-light"
              :class="{active: selectedTreemap === 3}"
              @click="update(3)">
                Under 1 million
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col pl-0 pr-0">
        <treemap
          :tickers="treemapData(min, max)"
          :height="height">
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
  data: function() {
    return {
      selectedTreemap: 0,
      min: 1000000000,
      max: undefined,
      height: 900
    };
  },
  computed: {
    ...mapGetters({
      treemapData: 'getTreemapData'
    })
  },
  methods: {
    update: function(selectedTreemap) {
      this.selectedTreemap = selectedTreemap;
      switch (selectedTreemap) {
        case 0:
          this.min = 1000000000;
          this.max = undefined;
          this.height = 900;
          break;
        case 1:
          this.min = 100000000;
          this.max = 1000000000;
          this.height = 1200;
          break;
        case 2:
          this.min = 1000000;
          this.max = 100000000;
          this.height = 2000;
          break;
        case 3:
          this.min = undefined;
          this.max = 1000000;
          this.height = 2000;
          break;
      }
    }
  },
  created: function() {
    this.update(0);
    this.$store.dispatch('getTickers');
  },
  components: { Treemap }
};
</script>

<style lang="scss" scoped>
#treemaps {
  .nav-pills {
    .nav-link {
      &.active {
        background-color: #000
      }
    }
  }
}
</style>
