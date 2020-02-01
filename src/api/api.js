import axios from 'axios'

const URL = "https://api.coingecko.com/api/v3";
const MONEY = "usd";
const PER_PAGE = "40";
const PAGE = "1";

export const getApi = axios.get(`${URL}
/coins/markets?vs_currency=${MONEY}
&order=market_cap_desc
&per_page=${PER_PAGE}
&page=${PAGE}
&sparkline=true&price_change_percentage=1h`);
