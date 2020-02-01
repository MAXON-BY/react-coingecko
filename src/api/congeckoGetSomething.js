import {MONEY, PAGE, PER_PAGE, SORT} from "./axios/apiConstants";
import {coingeckoAPI} from "./axios";

const congeckoGetSomething = coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=${PER_PAGE}&page=${PAGE}&sparkline=true&price_change_percentage=1h`);

export default congeckoGetSomething
