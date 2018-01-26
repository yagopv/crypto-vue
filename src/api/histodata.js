import cachios from 'cachios';
import * as constants from '@/utils/constants';

const getHistoData = async (symbol, interval) => {
  const response = await cachios.get(getBaseUrl(symbol, interval), {
    ttl: 300
  });
  return response;
};

function getBaseUrl(symbol, interval) {
  switch (interval) {
    case constants.TickerDetailIntervals.MINUTE:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histominute?fsym=${symbol}&tsym=USD&e=CCCAGG`;
    case constants.TickerDetailIntervals.HOUR:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histohour?fsym=${symbol}&tsym=USD&e=CCCAGG`;
    default:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&allData=true`;
  }
}

export { getHistoData };
