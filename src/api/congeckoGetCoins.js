import {MONEY, SORT} from "./axios/apiConstants";
import {coingeckoAPI} from "./axios";
import store from "../store/store";
import {getCoinFailed, getCoinFinally, getCoinSuccess, getCoinWrong} from "../actions/actionCoin";

const congeckoGetCoins = () => {
    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=1&sparkline=true&price_change_percentage=1h`)
        .then(
            result => {
                store.dispatch(getCoinSuccess(result.data));
            },
            error => {
                store.dispatch(getCoinFailed())
            },
        )
        .catch(
            critical => {
                store.dispatch(getCoinWrong())
            }
        )
        .finally(()=>{
            store.dispatch(getCoinFinally())
        })
};

export default congeckoGetCoins
