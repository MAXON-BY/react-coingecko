import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {congeckoGetPagination, congeckoGetCoins} from "../../api";
import Pagination from "../../components/Pagination/Pagination";
import {connect} from "react-redux";
import {toggleLoading} from "../../actions/actionCoin";
import Error from "../../components/Error/Error";

const tableHeaders = ["Coin", "Price", "1h", "24h", "7d"];

class Home extends Component {

    componentDidMount() {
        this.props.toggleLoading(true);
        if(this.props.currentPage === 1){
            this.props.congeckoGetCoins();
        }
    }

    nextPage = (currentPage) => {
        this.props.toggleLoading(true);
        this.props.congeckoGetPagination(currentPage)
    };

    render() {

        const {coins, isLoading} = this.props;
        const numberPages = Math.floor(this.props.totalResults / 30);

        if (isLoading) {
            return <Loading/>
        }

        return (
            !!this.props.error
                ? <Error error={this.props.error}/>
                : <div className={'container'}>
                    <table>
                        <thead>
                        <tr>
                            {tableHeaders.map(header => <th key={header}>{header}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            coins.map((coin, numCoin) => {
                                return (
                                    <tr key={coin.id}>
                                        <td>
                                            <div className="d-flex">
                                                <div className="coin-icon">
                                                    <img src={coin.image} alt=""/>
                                                </div>
                                                <div className="coin-name">
                                                    <NavLink to={`/coins/${coin.id}`}>{coin.name}</NavLink>
                                                    <span className="ml-2">({coin.symbol})</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>${coin.current_price}</span>
                                        </td>
                                        <td>
                                            <span
                                                className={coin.price_change_percentage_1h_in_currency > 0 ? "text-green" : "text-danger"}>
                                                {coin.price_change_percentage_1h_in_currency
                                                    ? (coin.price_change_percentage_1h_in_currency).toFixed(1)
                                                    : '?'}%
                                            </span>
                                        </td>
                                        <td>
                                            <span
                                                className={coin.price_change_percentage_24h > 0 ? "text-green" : "text-danger"}>
                                                {coin.price_change_percentage_24h
                                                    ? (coin.price_change_percentage_24h).toFixed(1)
                                                    : '?'}%
                                            </span>
                                        </td>
                                        <td>?</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    {this.props.totalResults > 30
                        ? <Pagination
                            pages={numberPages}
                            nextPage={this.nextPage}
                            currentPage={this.props.currentPage}
                        />
                        : null}
                </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        coins: store.coinState.coins,
        totalResults: store.coinState.totalResults,
        isLoading: store.coinState.isLoading,
        currentPage: store.coinState.currentPage,
        error: store.coinState.error,
    }
};

export default connect(mapStateToProps, { congeckoGetCoins, congeckoGetPagination, toggleLoading })(Home);
