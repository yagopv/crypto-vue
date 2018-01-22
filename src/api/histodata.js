import axios from 'axios';

const getHistoDay = async symbol => {
  const response = await axios.get(
    `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&allData=true`
  );
  return response;
};

export { getHistoDay };
