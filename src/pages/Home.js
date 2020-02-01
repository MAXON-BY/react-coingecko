import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Loading from "../components/Loading/Loading";
import {getApi} from "../api/api";

class Home extends Component {

    state = {
        coins: [],
        isLoading: true,
        num: 0
    };

    componentDidMount() {
        getApi.then(res => {
            console.log(res.data[0]);
            this.setState({isLoading: false});
            this.setState({coins: res.data});
        });
    }


    render() {

        const {coins, isLoading} = this.state;

        return (
            <div className={'container'}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coins.map((coin, num) => {
                                return(
                                    <tr key={coin.id}>
                                        <td>{num+1}</td>
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
                                            <span className={coin.price_change_percentage_1h_in_currency > 0 ? "text-green" : "text-danger"}>
                                                {(coin.price_change_percentage_1h_in_currency).toFixed(1)}%
                                            </span>
                                        </td>
                                        <td>
                                            <span className={coin.price_change_percentage_24h > 0 ? "text-green" : "text-danger"}>
                                                {(coin.price_change_percentage_24h).toFixed(1)}%
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {isLoading && <Loading/>}
            </div>
        );
    }
}

export default Home;
