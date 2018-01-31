<template>
  <div
    id="ticker-table"
    class="container-fluid pl-0 pr-0"
    v-infinite-scroll="addCoins"
    infinite-scroll-distance="600"
    infinite-scroll-throttle-delay="50"
    infinite-scroll-immediate-check="false">
    <div class="row">
      <div class="col">
        <div class="table-responsive table-dark">
            <table class="table table-hover table-dark">
              <thead class="thead-dark">
                <ticker-table-head :sort-by="sortBy"></ticker-table-head>
              </thead>
              <tbody>
                <ticker-table-row
                  v-for="ticker in tickers.slice(0, counter)"
                  :key="ticker.id"
                  :ticker="ticker"
                  :select-ticker="selectTicker">
                </ticker-table-row>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TickerTableHead from './ticker-table-head/TickerTableHead';
import TickerTableRow from './ticker-table-row/TickerTableRow';
import { schedule } from '@/utils/helpers';

export default {
  data: function() {
    return {
      counter: 0,
      scheduledTask: null
    };
  },
  computed: {
    ...mapGetters({
      tickers: 'getTickersSortBy'
    })
  },
  methods: {
    selectTicker: function(ticker) {
      this.$router.push({
        name: 'TickerDetail',
        params: { id: ticker.id }
      });
    },

    addCoins: function() {
      if (this.counter <= this.tickers.length) {
        this.counter += 100;
      }
    },

    sortBy: function({ key, type }) {
      this.counter = 100;
      this.$store.dispatch('sortBy', { key, type });
    }
  },
  created() {
    this.scheduledTask = schedule(
      () => this.$store.dispatch('getTickers'),
      600000
    );
    this.addCoins();
  },
  beforeDestroy() {
    clearInterval(this.scheduledTask);
  },
  components: { TickerTableHead, TickerTableRow }
};
</script>

<style lang="scss">
#ticker-table {
  thead {
    line-height: 3em;
  }
}
</style>
