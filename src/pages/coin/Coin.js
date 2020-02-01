import React from 'react';
import BreadScrum from "../../components/BreadScrum/BreadScrum";

const Coin = (props) => {

    const id = props.match.params.id;
    // const coin = props.coins.find(item => item.id === id);
    // console.log(coin);
    const coin = '';

    return (
        <div className={'container'}>
            <BreadScrum id={id}/>
            <div>
                <div className="current-coin">
                    <img src={coin.image} alt=""/>
                    <h2>{coin.name}</h2>
                    <span>{coin.current_price} $</span>
                </div>

                <hr/>

                <div className="current-coin-info">
                    <h4>БЫСТРАЯ СТАТИСТИКА</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th><strong>Курс биткоина</strong></th>
                                <td>{coin.current_price} $</td>
                            </tr>
                            <tr>
                                <th><strong>Рыночная капитализация</strong></th>
                                <td>{coin.market_cap} $</td>
                            </tr>
                            <tr>
                                <th><strong>Объем торгов</strong></th>
                                <td>{coin.total_volume} $</td>
                            </tr>
                            <tr>
                                <th><strong>Объем/рын. кап.</strong></th>
                                <td>{coin.price_change_percentage_1h_in_currency}</td>
                            </tr>
                            <tr>
                                <th><strong>Минимальный курс за 24 часа / Максимальный курс за 24 часа</strong></th>
                                <td>{coin.low_24h} $ / {coin.high_24h} $</td>
                            </tr>
                            <tr>
                                <th><strong>Абсолютный максимум</strong></th>
                                <td>{coin.ath}$, {coin.ath_change_percentage}%, Date:{coin.ath_date}</td>
                            </tr>
                            <tr>
                                <th><strong>Позиция в рейтинге Market Cap</strong></th>
                                <td>#{coin.market_cap_rank}</td>
                            </tr>
                            <tr>
                                <th><strong>Общее количество монет</strong></th>
                                <td>{coin.total_supply} штук</td>
                            </tr>
                            <tr>
                                <th><strong>Сейчас в обращении</strong></th>
                                <td>{coin.circulating_supply} штук</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default Coin;
