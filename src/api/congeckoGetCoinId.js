import {coingeckoAPI} from "./axios";
import {getCoinFinally, getCoinId} from "../actions/actionCoin";

const congeckoGetCoinId = (id) => dispatch => {
    return coingeckoAPI.get(`/coins/${id}?sparkline=true`)
        .then(
            result => {
                dispatch(getCoinId(result.data))
            }
        )
        .finally(() => dispatch(getCoinFinally()))
};

export default congeckoGetCoinId
