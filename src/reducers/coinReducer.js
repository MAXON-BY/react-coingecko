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

        coinId: {
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
            isLoading: true
        }
};

const coinReducer = (state = initialState, action) =>{
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
            //TODO переименовать! получить монету меняет статус загрузки...
        case types.GET_COIN_FINALLY:
            console.log('GET_COIN_FINALLY')
            return {
                ...state,
                isLoading: false
            };
        case types.GET_COIN_PAGINATION:
            return {
                ...state,
                coins: action.coins,
                currentPage: action.currentPage,
            };
        case types.GET_COIN_ID:
            return {
                ...state,
                coinId: {
                    id: action.coinId.id,
                    image: action.coinId.image.small,
                    name: action.coinId.name,
                    current_price: action.coinId.market_data.current_price.usd,
                    market_cap: action.coinId.market_data.market_cap.usd,
                    total_volume: action.coinId.market_data.total_volume.usd,
                    price_change_percentage_1h_in_currency: action.coinId.market_data.price_change_percentage_1h_in_currency.usd,
                    low_24h: action.coinId.market_data.low_24h.usd,
                    high_24h: action.coinId.market_data.high_24h.usd,
                    ath: action.coinId.market_data.ath.usd,
                    ath_change_percentage: action.coinId.market_data.ath_change_percentage.usd,
                    ath_date: action.coinId.market_data.ath_date.usd,
                    market_cap_rank: action.coinId.market_cap_rank,
                    total_supply: action.coinId.market_data.total_supply,
                    circulating_supply: action.coinId.market_data.circulating_supply,
                    sparkline_7d: action.coinId.market_data.sparkline_7d.price,
                    isLoading: false
                },

            };

        default:
            return state;
    }
};

export default coinReducer

