import * as types from '../actions/actionTypes'

const initialState = {
        coins: [],
        isLoading: true,
        error: "",
        currency1h: 0,
        currency24h: 0,
        totalResults: 0,
        currentPage: 1,
};

export default function coinReducer(state = initialState, action){
    switch (action.type) {
        case types.GET_COIN_SUCCESS:
            return {
                ...state,
                coins: action.coins,
                totalResults: 260
            }
        default:
            return state;
    }
}