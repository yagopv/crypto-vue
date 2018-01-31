<template>
<div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-2">Crypto Vue</h1>
      <p class="lead">Get all the info you need about your favourite cryptocurrency.</p>
    </div>
  </div>
  <div class="container text-light">
    <h1>Main Features</h1>
    <hr class="border border-light">
    <p>This site shows information about cryptocurrencies using public APIs from:</p>
    <dl class="row">
      <dt class="col-sm-2">Coinmarketcap</dt>
      <dd class="col-sm-10">
        <a class="text-warning" href="https://coinmarketcap.com/es/api/" target="_blank">https://coinmarketcap.com/es/api/</a>
      </dd>

      <dt class="col-sm-2">Cryptocompare</dt>
      <dd class="col-sm-10">
        <a class="text-warning" href="https://www.cryptocompare.com/api/" target="_blank">https://www.cryptocompare.com/api/</a>
      </dd>
    </dl>
    <p>There are 3 main sections:</p>

    <h4 class="mt-3 mb-3">
      <a class="text-warning" href="#/tickers">Coin list</a>
    </h4>
    <p>In this table we can take a look to all the cryptocurrencies in the market retrieved from Coinmarketcap.</p>
    <p>If you press in the table headers you can order the columns.</p>
    <p>There is a search field in the navigation bar in order to search for coins in the table.</p>
    <p>Press on a table row to go to the coin details.</p>
    <p>In the navbar you can see current global market cap, change in the last 24h and the percentage of Bitcoin dominance. </p>

    <h4 class="mt-3 mb-3">
      <a class="text-warning" href="#/market-cap-maps">Maps</a>
    </h4>
    <p>In this page you can take a look to the coins in a fancy way using a Treemap for data visualization.</p>
    <p>You can filter by several grouped market caps.</p>
    <p>If you hover on the map points then you can see more info about the coin.</p>
    <p>Press on a point to go to the coin details.</p>

    <h4 class="mt-3 mb-3">
      <a class="text-warning" href="#/ticker/ethereum">Coin details</a>
    </h4>
    <p>In the coin detail section you can see a candlestick and volume chart showing all the historical data for the coin.</p>
    <p>You can zoom the table using date intervals or group candles in periods. You can as well print or download an image of the chart.</p>
    <p>Each candle is a day. There are another implementations using a candle per hour or per minute in order to achieve different types of visualizations.
      You can access to this graphs adding a querystring to the url. For example <a class="text-warning" href="#/ticker/ethereum?interval=minute">/ticker/ethereum?interval=minute</a>.
      You can use as intervals 'day', 'hour' or 'minute'.
      I would like to implement a way to change between datasets reusing the chart but is not done because I couldn't get rid of a bug with the old data candles ovelapping with new ones when changig datasets, so I remove the feature.
    </p>

    <h1 class="mt-3">Roadmap? ...</h1>
    <hr class="border border-light">
    <p>There are several things I would like to improve</p>
    <ul>
      <li>Make ticker table fixed header and with fixed column width while maintaining the responsive behavior.</li>
      <li>Allow changing in the UI between the day, hour and minute graphs. Important for intraday users.</li>
      <li>Add realtime to candlestick graphs.</li>
      <li>Add more data to coin details. The Cryptocompare API can return lot of useful data.</li>
      <li>Improve responsive. Focus on mobile.</li>
      <li>Improve global error and notifications management.</li>
      <li>Add a beautiful sticky footer</li>
      <li>Nice thing to have would be i18n</li>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>

</style>
