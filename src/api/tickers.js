import cachios from 'cachios';

const getTickers = async () => {
  const response = await cachios.get(
    'https://api.coinmarketcap.com/v1/ticker/?limit=0',
    { ttl: 300 }
  );
  return response;
};

const getCoinList = async () => {
  const response = await cachios.get(
    'https://min-api.cryptocompare.com/data/all/coinlist',
    { ttl: 86400 }
  );
  return response;
};

export { getTickers, getCoinList };
