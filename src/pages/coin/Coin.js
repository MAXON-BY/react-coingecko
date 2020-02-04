import React, {Component} from 'react';
import Moment from 'react-moment';
import './Coin.css'
import BreadScrum from "../../components/BreadScrum/BreadScrum";
import {congeckoGetCoinId} from "../../api";
import GraphicInfo from "../../components/GraphicInfo/GraphicInfo";

const REQUEST_FAILED = "REQUEST_FAILED";
const SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG";

class Coin extends Component {

    state = {
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

    componentDidMount(){
        const id = this.props.match.params.id;

        congeckoGetCoinId(id)
            .then(
                result => {
                    this.setState({
                        id: result.data.id,
                        image: result.data.image.small,
                        name: result.data.name,
                        current_price: result.data.market_data.current_price.usd,
                        market_cap: result.data.market_data.market_cap.usd,
                        total_volume: result.data.market_data.total_volume.usd,
                        price_change_percentage_1h_in_currency: result.data.market_data.price_change_percentage_1h_in_currency.usd,
                        low_24h: result.data.market_data.low_24h.usd,
                        high_24h: result.data.market_data.high_24h.usd,
                        ath: result.data.market_data.ath.usd,
                        ath_change_percentage: result.data.market_data.ath_change_percentage.usd,
                        ath_date: result.data.market_data.ath_date.usd,
                        market_cap_rank: result.data.market_cap_rank,
                        total_supply: result.data.market_data.total_supply,
                        circulating_supply: result.data.market_data.circulating_supply,
                        sparkline_7d: result.data.market_data.sparkline_7d.price
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
            })
    }


    render() {
        const {id, current_price, image, name, market_cap, total_volume, price_change_percentage_1h_in_currency,
        low_24h, high_24h, ath, ath_change_percentage, ath_date, market_cap_rank, total_supply,
        circulating_supply, sparkline_7d} = this.state;

        return (
            <div className={'container'}>
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
                        <h4>БЫСТРАЯ СТАТИСТИКА</h4>
                        <table>
                            <tbody>
                            <tr>
                                <th><strong>Курс биткоина</strong></th>
                                <td>{current_price} $</td>
                            </tr>
                            <tr>
                                <th><strong>Рыночная капитализация</strong></th>
                                <td>{market_cap} $</td>
                            </tr>
                            <tr>
                                <th><strong>Объем торгов</strong></th>
                                <td>{total_volume} $</td>
                            </tr>
                            <tr>
                                <th><strong>Объем/рын. кап.</strong></th>
                                <td>{price_change_percentage_1h_in_currency}</td>
                            </tr>
                            <tr>
                                <th><strong>Мин. курс за 24ч. / Макс. курс за 24ч.</strong></th>
                                <td>{low_24h} $ / {high_24h} $</td>
                            </tr>
                            <tr>
                                <th><strong>Абсолютный максимум</strong></th>
                                <td>
                                    <p>{ath}$</p>
                                    <p>{ath_change_percentage}%</p>
                                    <p>Date: <Moment format="D MMM YYYY" withTitle>{ath_date}</Moment></p>
                                </td>
                            </tr>
                            <tr>
                                <th><strong>Рейтинг Market Cap</strong></th>
                                <td>#{market_cap_rank}</td>
                            </tr>
                            <tr>
                                <th><strong>Общее количество монет</strong></th>
                                <td>{total_supply} штук</td>
                            </tr>
                            <tr>
                                <th><strong>Сейчас в обращении</strong></th>
                                <td>{circulating_supply} штук</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Coin;
