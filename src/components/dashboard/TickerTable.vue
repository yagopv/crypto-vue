<template>
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
</template>

<script>
import TickerTableHead from './TickerTableHead';
import TickerTableRow from './TickerTableRow';

export default {
  props: ['tickers'],
  components: { TickerTableHead, TickerTableRow }
};
</script>
