import {coingeckoAPI} from "./axios";
import {getCoinFailed, getCoinFinally, getCoinId, getCoinWrong} from "../actions/actionCoin";

const congeckoGetCoinId = (id) => dispatch => {
    return coingeckoAPI.get(`/coins/${id}?sparkline=true`)
        .then(
            result => {dispatch(getCoinId(result.data))},
            error => {dispatch(getCoinFailed())},
        )
        .catch(critical => {dispatch(getCoinWrong())})
        .finally(() => dispatch(getCoinFinally()))
};

export default congeckoGetCoinId
