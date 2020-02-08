import * as types from '../actions/actionTypes'
import {REQUEST_FAILED, SOMETHING_WENT_WRONG} from "../api/axios/apiConstants";

const initialState = {
        coins: [],
        isLoading: true,
        error: "",
        currency1h: 0,
        currency24h: 0,
        totalResults: 260,
        currentPage: 1,

        id: '',
        image: '',
        name: '',
        current_price: 0,
        market_cap: 0,
        total_volume: 0,
        price_change_percentage: 0,
        low_24h: 0,
        high_24h: 0,
        ath: 0,
        ath_change_percentage: 0,
        ath_date: 0,
        market_cap_rank: 0,
        total_supply: 0,
        circulating_supply: 0,
};

export default function coinReducer(state = initialState, action){
    switch (action.type) {
        case types.GET_COIN_SUCCESS:
            return {
                ...state,
                coins: action.coins,
            };
        case types.GET_COIN_FAILED:
            return {
                ...state,
                error: REQUEST_FAILED,
            };
        case types.GET_COIN_SOMETHING_WRONG:
            return {
                ...state,
                error: SOMETHING_WENT_WRONG,
            };
        case types.GET_COIN_PAGINATION:
            return {
                ...state,
                coins: action.coins,
                currentPage: action.currentPage,
                isLoading: true
            };
        case types.GET_COIN_FINALLY:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}