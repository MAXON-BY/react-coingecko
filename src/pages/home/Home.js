import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {congeckoGetPagination, congeckoGetSomething} from "../../api";
import Pagination from "../../components/Pagination/Pagination";

const tableHeaders = ["#", "Coin", "Price", "1h", "24h", "7d"];
const REQUEST_FAILED = "REQUEST_FAILED";
const SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG";

class Home extends Component {

    state = {
        coins: [],
        isLoading: true,
        error: "",
        currency1h: 0,
        currency24h: 0,
        totalResults: 0,
        currentPage: 1,
        numCoin: 0
    };

    componentDidMount() {
        congeckoGetSomething
            .then(
                result => {
                    this.setState({
                        coins: result.data,
                        res: result,
                        totalResults: 260,
                    })
                },
                error => {
                    this.setState({error: REQUEST_FAILED})
                },
            )
            .catch(
                critical => {
                    this.setState({error: SOMETHING_WENT_WRONG})
                }
            )
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            });
    }

    nextPage = (pageNumber) => {
        congeckoGetPagination(pageNumber)
            .then(
                result => {
                    this.setState({
                        coins: result.data,
                        numCoin: pageNumber * 30,
                        currentPage: pageNumber,
                        isLoading: false,
                    })
                },
            )
    };

    render() {
        const {coins, isLoading} = this.state;
        const numberPages = Math.floor(this.state.totalResults / 30);

        return (
            !!this.state.error
                ? <>
                    {this.state.error === REQUEST_FAILED && <div>{REQUEST_FAILED}</div>}
                    {this.state.error === REQUEST_FAILED && <div>{SOMETHING_WENT_WRONG}</div>}
                </>
                : <>
                    <div className={'container'}>
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
                                            <td>{numCoin + 1}</td>
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
                                                    : this.state.currency1h}%
                                            </span>
                                            </td>
                                            <td>
                                            <span
                                                className={coin.price_change_percentage_24h > 0 ? "text-green" : "text-danger"}>
                                                {coin.price_change_percentage_24h
                                                    ? (coin.price_change_percentage_24h).toFixed(1)
                                                    : this.state.currency24h}%
                                            </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        {this.state.totalResults > 1
                            ? <Pagination
                                pages={numberPages}
                                nextPage={this.nextPage}
                                currentPage={this.state.currentPage}
                            />
                            : ''}
                        {isLoading && <Loading/>}
                    </div>
                </>
        );
    }
}

export default Home;
