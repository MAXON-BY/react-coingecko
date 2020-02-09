import {coingeckoAPI} from "./axios";
import {MONEY, SORT} from "./axios/apiConstants";
import {getCoinFailed, getCoinPagination} from "../actions/actionCoin";
import store from "../store/store";

const congeckoGetPagination  = (pageNumber) => {

    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=${pageNumber}&price_change_percentage=1h`)
        .then(
            result => {
                store.dispatch(getCoinPagination(pageNumber, result.data))
            },
            error => {
                store.dispatch(getCoinFailed());
                console.log(error)
            },
        )
};

export default congeckoGetPagination
