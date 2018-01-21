import axios from 'axios';

const getHistoDay = async symbol => {
  const response = await axios.get(
    `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=30&e=CCCAGG`
  );
  return response;
};

export { getHistoDay };
