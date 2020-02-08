import * as types from "./actionTypes";

export function getCoinSuccess(coins) {
    return{
        type: types.GET_COIN_SUCCESS,
        coins: coins
    }
}

export function getCoinFailed() {
    return{
        type: types.GET_COIN_FAILED
    }
}

export function getCoinWrong() {
    return{
        type: types.GET_COIN_SOMETHING_WRONG
    }
}

export function getCoinFinally() {
    return{
        type: types.GET_COIN_FINALLY
    }
}

export function getCoinPagination(pageNumber, coins) {
    return{
        type: types.GET_COIN_PAGINATION,
        currentPage: pageNumber,
        coins: coins,
    }
}

export function getCoinId(id) {
    return{
        type: types.GET_COIN_ID,
        id: id
    }
}