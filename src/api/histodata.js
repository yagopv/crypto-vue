import cachios from 'cachios';
import * as constants from '@/utils/constants';

const getHistoDay = async symbol => {
  const response = await cachios.get(
    `${
      constants.CRYPTOCOMPARE_ROOT_URL
    }/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&allData=true`,
    { ttl: 300 }
  );
  return response;
};

export { getHistoDay };
