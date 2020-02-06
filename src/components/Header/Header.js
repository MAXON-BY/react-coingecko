import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className={'container header-flex'}>
            <div className="logo">
                <img
                    src="https://static.coingecko.com/s/coingecko-logo-914bb72fab0df2d908e6123221470802f1bfac637b0f90399a3341c753f6bc52.png"
                    alt="coingecko"/>
            </div>
            <p>FREE version (260 coins limited)</p>
        </header>
    );
};

export default Header;