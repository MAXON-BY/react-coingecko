import React, {Component} from 'react';
import Moment from 'react-moment';
import NumberFormat from "react-number-format";
import './Coin.css'
import BreadScrum from "../../components/BreadScrum/BreadScrum";
import {congeckoGetCoinId} from "../../api";
import GraphicInfo from "../../components/GraphicInfo/GraphicInfo";
import Loading from "../../components/Loading/Loading";
import {connect} from "react-redux";

class Coin extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.congeckoGetCoinId(id)
    }

    render() {

        const {
            id, current_price, image, name, market_cap, total_volume, price_change_percentage_1h_in_currency,
            low_24h, high_24h, ath, ath_change_percentage, ath_date, market_cap_rank, total_supply,
            circulating_supply, sparkline_7d, isLoading
        } = this.props;

        if (isLoading) {
            return <Loading/>
        }

        return (
            <div className={'container'}>

                {isLoading && <Loading/>}

                <BreadScrum id={id}/>

                <div>
                    <div className="current-coin">
                        <img src={image} alt=""/>
                        <h2>{name}</h2>
                        <span>{current_price} $</span>
                    </div>

                    <hr/>

                    <div className="current-coin-info-wrap">
                        <div className="current-coin-graphic">
                            <GraphicInfo sparkline_7d={sparkline_7d}/>
                        </div>
                        <div className="current-coin-info">
                            <h4>QUICK STATS</h4>
                            <table>
                                <tbody>
                                <tr>
                                    <th><strong>Price</strong></th>
                                    <td>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            suffix={' $'}
                                            displayType={'text'}
                                            value={current_price}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>Market Cap</strong></th>
                                    <td>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            suffix={' $'}
                                            displayType={'text'}
                                            value={market_cap}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>Trading Volume</strong></th>
                                    <td>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            suffix={' $'}
                                            displayType={'text'}
                                            value={total_volume}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>Volume / Market Cap</strong></th>
                                    <td>{price_change_percentage_1h_in_currency}</td>
                                </tr>
                                <tr>
                                    <th>
                                        <p><strong>24h Low</strong></p>
                                        <p><strong>24h High</strong></p>
                                    </th>
                                    <td>
                                        <p>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                suffix={' $'}
                                                displayType={'text'}
                                                value={low_24h}
                                            />
                                        </p>
                                        <p>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                suffix={' $'}
                                                displayType={'text'}
                                                value={high_24h}
                                            />
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>All-Time High</strong></th>
                                    <td>
                                        <p>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                suffix={' $'}
                                                displayType={'text'}
                                                value={ath}
                                            />
                                        </p>
                                        <p>
                                            <span className={ath_change_percentage > 0 ? "text-green" : "text-danger"}>
                                                {ath_change_percentage
                                                    ? (ath_change_percentage).toFixed(1)
                                                    : '?'}%
                                            </span>
                                        </p>
                                        <p>Date: <Moment format="D MMM YYYY" withTitle>{ath_date}</Moment></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>Rank Market Cap</strong></th>
                                    <td>#{market_cap_rank}</td>
                                </tr>
                                <tr>
                                    <th><strong>Max supply</strong></th>
                                    <td>
                                        {total_supply
                                            ? <NumberFormat
                                                thousandSeparator={true}
                                                suffix={' coins'}
                                                displayType={'text'}
                                                value={total_supply}/>
                                            : '?'}
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>Circulating supply</strong></th>
                                    <td>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            suffix={' coins'}
                                            displayType={'text'}
                                            value={circulating_supply}
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        id: store.coinState.coinId.id,
        image: store.coinState.coinId.image,
        name: store.coinState.coinId.name,
        current_price: store.coinState.coinId.current_price,
        market_cap: store.coinState.coinId.market_cap,
        total_volume: store.coinState.coinId.total_volume,
        price_change_percentage_1h_in_currency: store.coinState.coinId.price_change_percentage_1h_in_currency,
        low_24h: store.coinState.coinId.low_24h,
        high_24h: store.coinState.coinId.high_24h,
        ath: store.coinState.coinId.ath,
        ath_change_percentage: store.coinState.coinId.ath_change_percentage,
        ath_date: store.coinState.coinId.ath_date,
        market_cap_rank: store.coinState.coinId.market_cap_rank,
        total_supply: store.coinState.coinId.total_supply,
        circulating_supply: store.coinState.coinId.circulating_supply,
        sparkline_7d: store.coinState.coinId.sparkline_7d,
        isLoading: store.coinState.coinId.isLoading,
        currentPage: store.coinState.currentPage
    }
};

export default connect(mapStateToProps, { congeckoGetCoinId })(Coin);
