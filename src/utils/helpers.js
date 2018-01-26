const colorizePercentChange = change =>
  change > 0 ? 'text-success' : 'text-danger';

const getImageUrl = ticker =>
  ticker.meta && `http://cryptocompare.com${ticker.meta.ImageUrl}`;

export { colorizePercentChange, getImageUrl };
