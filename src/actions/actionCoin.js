import * as types from "./actionTypes";

export const getCoinSuccess = coins => ({ type: types.GET_COIN_SUCCESS, coins});

export const getCoinFailed = () => ({ type: types.GET_COIN_FAILED });

export const getCoinWrong = () => ({ type: types.GET_COIN_SOMETHING_WRONG });

export const getCoinFinally = () => ({ type: types.GET_COIN_FINALLY });

export const getCoinPagination = (pageNumber, coins) => ({
        type: types.GET_COIN_PAGINATION,
        pageNumber, coins
});

export const getCoinId = coinId => ({ type: types.GET_COIN_ID, coinId: coinId });
