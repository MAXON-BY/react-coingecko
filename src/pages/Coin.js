import React from 'react';

const Coin = (props) => {

    const id = props.match.params.id;
    // const coin = props.coins.find(item => item.id === id);
    // console.log(coin);

    return (
        <div>
            Coin Id Page {id}
        </div>
    );
};

export default Coin;
