import * as types from "./actionTypes";

export function getCoinSuccess(coins) {
    return{
        type: types.GET_COIN_SUCCESS,
        coins: coins,
        totalResults: 260
    }
}