<template>
  <div
    id="ticker-table"
    class="container-fluid"
    v-infinite-scroll="addCoins"
    infinite-scroll-distance="600"
    infinite-scroll-throttle-delay="50">
    <div class="row">
      <div class="col">
        <div class="table-responsive">
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

import TickerTableHead from './TickerTableHead';
import TickerTableRow from './TickerTableRow';

export default {
  data: function() {
    return {
      counter: 0
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
  components: { TickerTableHead, TickerTableRow }
};
</script>

<style lang="scss">
#ticker-table {
  padding-left: 0;
  padding-right: 0;
  thead {
    line-height: 3em;
  }
}
</style>
