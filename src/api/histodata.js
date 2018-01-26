import cachios from 'cachios';

const getHistoDay = async symbol => {
  const response = await cachios.get(
    `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&allData=true`,
    { ttl: 300 }
  );
  return response;
};

export { getHistoDay };
