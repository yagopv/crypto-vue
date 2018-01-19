import axios from 'axios';

const getTickers = async () => {
  const response = await axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=0');
  return response;
};

const getTickerByID = async (id) => {
  const response = await axios.get(`https://min-api.cryptocompare.com/data/histoday/?fsym=${id}&tsym=USD&limit=30&e=CCCAGG`);
  return response;
};

export { getTickers, getTickerByID };
