<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead class="thead-dark">
              <ticker-table-head></ticker-table-head>
            </thead>
            <tbody>
              <ticker-table-row
                v-for="ticker in tickers"
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
  computed: {
    ...mapGetters({
      tickers: 'getTickersByRank'
    })
  },
  methods: {
    selectTicker: function(ticker) {
      this.$router.push({
        name: 'TickerDetail',
        params: { id: ticker.id }
      });
    }
  },
  components: { TickerTableHead, TickerTableRow }
};
</script>
