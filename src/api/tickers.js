import axios from 'axios';

const getTickers = async cb => {
  const response = await axios.get('https://api.coinmarketcap.com/v1/ticker/');
  return response;
};

export { getTickers };
