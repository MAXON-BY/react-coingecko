import {MONEY, SORT} from "./axios/apiConstants";
import {coingeckoAPI} from "./axios";
import {getCoinFailed, getCoinFinally, getCoinSuccess, getCoinWrong} from "../actions/actionCoin";

const congeckoGetCoins = () => dispatch => {
    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=1&sparkline=true&price_change_percentage=1h`)
        .then(
            result => {dispatch(getCoinSuccess(result.data));},
            error => {dispatch(getCoinFailed())},
        )
        .catch(critical => {dispatch(getCoinWrong())})
        .finally(()=>{dispatch(getCoinFinally())})
};

export default congeckoGetCoins
