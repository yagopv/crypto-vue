<template>
  <div class="container-fluid">
    <div class="table-responsive">
      <table class="table">
        <thead class="thead-dark">
          <ticker-table-head></ticker-table-head>
        </thead>
        <tbody>
          <ticker-table-row
            v-for="ticker in tickers"
            :key="ticker.id"
            :ticker="ticker">
          </ticker-table-row>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TickerTableHead from './TickerTableHead';
import TickerTableRow from './TickerTableRow';

export default {
  name: 'Dashboard',
  computed: mapGetters({
    tickers: 'tickers'
  }),
  created() {
    this.$store.dispatch('getTickers');
  },
  components: { TickerTableHead, TickerTableRow }
};
</script>

<style scoped>

</style>
