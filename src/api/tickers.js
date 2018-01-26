import axios from 'axios';

const getTickers = async () => {
  const response = await axios.get(
    'https://api.coinmarketcap.com/v1/ticker/?limit=0'
  );
  return response;
};

const getCoinList = async () => {
  const response = await axios.get(
    'https://min-api.cryptocompare.com/data/all/coinlist'
  );
  return response;
};

export { getTickers, getCoinList };
