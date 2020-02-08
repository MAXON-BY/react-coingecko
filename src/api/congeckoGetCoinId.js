import {coingeckoAPI} from "./axios";
import store from "../store/store";
import {getCoinId} from "../actions/actionCoin";

const congeckoGetCoinId = (id) => {
    return coingeckoAPI.get(`/coins/${id}?sparkline=true`)
        .then(
            result => {
                store.dispatch(getCoinId(id, result.data))
            }
        )
};

export default congeckoGetCoinId