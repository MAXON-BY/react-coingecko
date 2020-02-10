import {coingeckoAPI} from "./axios";
import {MONEY, SORT} from "./axios/apiConstants";
import {getCoinFailed, getCoinFinally, getCoinPagination} from "../actions/actionCoin";

const congeckoGetPagination  = (pageNumber) => dispatch => {

    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=${pageNumber}&price_change_percentage=1h`)
        .then(
            result => {
                dispatch(getCoinPagination(pageNumber, result.data))
            },
            error => {
                dispatch(getCoinFailed());
                console.log(error)
            },
        )
        .finally(() => dispatch(getCoinFinally()))
};

export default congeckoGetPagination
