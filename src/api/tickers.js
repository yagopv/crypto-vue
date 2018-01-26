import cachios from 'cachios';
import * as constants from '@/utils/constants';

const getTickers = async () => {
  const response = await cachios.get(
    `${constants.COINMARKETCAP_ROOT_URL}/ticker/?limit=0`,
    { ttl: 300 }
  );
  return response;
};

const getCoinList = async () => {
  const response = await cachios.get(
    `${constants.CRYPTOCOMPARE_ROOT_URL}/data/all/coinlist`,
    { ttl: 86400 }
  );
  return response;
};

export { getTickers, getCoinList };
