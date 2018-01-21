import axios from 'axios';

const getTickers = async () => {
  const response = await axios.get(
    'https://api.coinmarketcap.com/v1/ticker/?limit=0'
  );
  return response;
};

export { getTickers };
