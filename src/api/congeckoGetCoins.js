import {MONEY, SORT} from "./axios/apiConstants";
import {coingeckoAPI} from "./axios";
import store from "../store/store";
import {getCoinSuccess} from "../actions/actionCoin";

const congeckoGetCoins = () => {
    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=1&sparkline=true&price_change_percentage=1h`)
        .then(result => {
            store.dispatch(getCoinSuccess(result.data));
            return result;
        })

    // .then(
        //         result => {
        //             this.setState({
        //                 coins: result.data,
        //                 res: result,
        //                 totalResults: 260,
        //             })
        //         },
        //         error => {
        //             this.setState({error: REQUEST_FAILED})
        //         },
        //     )
        //     .catch(
        //         critical => {
        //             this.setState({error: SOMETHING_WENT_WRONG})
        //         }
        //     )
        //     .finally(() => {
        //         this.setState({
        //             isLoading: false
        //         })
        //     });
};





export default congeckoGetCoins
