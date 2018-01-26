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
    case constants.TickerDetailIntervals.MONTHLY:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&aggregate=30`;
    case constants.TickerDetailIntervals.WEEKLY:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&aggregate=7`;
    case constants.TickerDetailIntervals.HOURLY:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histohour?fsym=${symbol}&tsym=USD&e=CCCAGG`;
    case constants.TickerDetailIntervals.HOURLY_4:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histohour?fsym=${symbol}&tsym=USD&e=CCCAGG&aggregate=4`;
    default:
      return `${
        constants.CRYPTOCOMPARE_ROOT_URL
      }/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&allData=true`;
  }
}

export { getHistoData };
