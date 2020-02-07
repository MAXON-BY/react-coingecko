import {combineReducers} from "redux";

// Reducers
import coinReducer from './coinReducer';

// Combine Reducers
let reducers = combineReducers({
    coinState: coinReducer
});

export default reducers;