import React from 'react';
import { Card, CardsContainer } from './styles';
const ConnectWalletCard = () => {
    return (
        <CardsContainer>
            <Card url='https://cdn.iconscout.com/icon/free/png-512/binance-7662244-6297180.png?f=avif&w=256'>
                <p>Metamask</p>
                <p>Connect <span id='img'></span></p>
            </Card>
            <Card url='https://logosarchive.com/wp-content/uploads/2022/02/Metamask-icon.svg'>
                <p>Metamask</p>
                <p>Connect <span id='img'></span></p>
            </Card>
            <Card url='https://cdn.iconscout.com/icon/free/png-512/coinbase-7662253-6297189.png?f=avif&w=256'>
                <p>Metamask</p>
                <p>Connect <span id='img'></span></p>
            </Card>
        </CardsContainer>
    );
};

export default ConnectWalletCard;