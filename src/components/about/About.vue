<template>
<div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-2">Crypto Vue</h1>
      <p class="lead">Get all the data you need about your favourite cryptocurrency.</p>
    </div>
  </div>
  <div class="container text-light">
    <h1>Main Features</h1>
    <hr class="border border-light">
    <p>This site get data about cryptocurrencies using public APIs from:</p>
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
    <p>There are 3 main sections where we can take a look to the data</p>
    <dl class="row">
      <dt class="col-sm-2"><a class="text-warning" href="#/tickers">Cryptocurrency list</a></dt>
      <dd class="col-sm-10">
        <p>- We can take a look to all the cryptocurrencies retrieved from Coinmarketcap.</p>
        <p>- If you press in the table headers you can order the columns.</p>
        <p>- There is a search field in the navigation bar in order to search for coins in the table.</p>        
        <p>- Press on a table row to go to the coin details.</p>        
      </dd>

      <dt class="col-sm-2"><a class="text-warning" href="#/market-cap-maps">Maps</a></dt>
      <dd class="col-sm-10">
        <p>- You can take a look to the coins in a fancy way using a Treemap for data visualization.</p>
        <p>- You can filter by Marketcap.</p>
        <p>- If you hover on the map points then you can see more info for the coin.</p>
        <p>- Press on a point to go to the coin details.</p>
      </dd>

      <dt class="col-sm-2"><a class="text-warning" href="#/ticker/ethereum">Cryptocurrency detail</a></dt>
      <dd class="col-sm-10">
        <p>- In the crypto detail you can see a chart with a Candlestick and Volume graph showing all the historical data for the coin.</p>
        <p>- You can zoom the table using the intervals and filter by dates.</p>
        <p>- Each candle is a day. There are another implmentations using a candle per hour or per minute for different types of visualizations. 
             You can access to this graphs adding a querystring to the url. For example <a class="text-warning" href="#/ticker/ethereum?interval=minute">/ticker/ethereum?interval=minute</a>.
             You can use 'day', 'hour' or 'minute' as intervals.
             The change between graphs is not implemented because I had a bug with the graphs ovelapping data when changig datasets, so I remove the feature by the moment.
        </p>
      </dd>
    </dl>

    <h1>For being implemented</h1>
    <hr class="border border-light">
    <p>There are several things I would like to improve</p>
    <ul>
      <li>Make ticker table fixed header and with fixed column width while maintaining the responsive behavior.</li>
      <li>Allow changing in the UI between the day, hour and minute graphs. Important for intraday users.</li>
      <li>Add realtime to detail graphs.</li>
      <li>Add more data to coin details. The Cryptocompare API can return lot of useful data.</li>
      <li>Improve responsive. Focus on mobile.</li>
      <li>Improve global error and notifications management.</li>  
      <li>Add a beautiful footer</li>  
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
