import cachios from 'cachios';
import * as constants from '@/utils/constants';

const getTickers = async () => {
  const response = await cachios.get(
    `${constants.COINMARKETCAP_ROOT_URL}/ticker/?limit=0`,
    { ttl: 300 }
  );
  return response;
};

const getGlobalMarketInfo = async () => {
  const response = await cachios.get(
    `${constants.COINMARKETCAP_ROOT_URL}/global/`,
    { ttl: 300 }
  );
  return response;
};

const getCoinList = async () => {
  const response = await cachios.get(
    `${constants.CRYPTOCOMPARE_ROOT_URL}/data/all/coinlist`,
    { ttl: 300 }
  );
  return response;
};

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

export { getHistoData, getTickers, getCoinList, getGlobalMarketInfo };
