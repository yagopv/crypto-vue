
<template>
  <div>
    <div class="btn-group" role="group">
      <button
        type="button"
        class="btn btn-dark"
        :class="{active: !isTreemapVisible}"
        @click="toggleTreemapVisibility(false)">
          <font-awesome-icon icon="list" />
      </button>
      <button
        type="button"
        class="btn btn-dark"
        :class="{active: isTreemapVisible}"
        @click="toggleTreemapVisibility(true)">
          <font-awesome-icon icon="chart-pie" />
      </button>
    </div>
    <div class="btn-group" role="group" v-if="isTreemapVisible">
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
        :class="{ active: !isTreemapVisible}"
        @click="selectTreemap(3)">
        Under 1 million
      </button>
    </div>
  </div>
</template>


<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'TickerToolbar',
  props: [
    'isTreemapVisible',
    'toggleTreemapVisibility',
    'selectTreemap',
    'selectedTreemap'
  ],
  components: { FontAwesomeIcon }
};
</script>
