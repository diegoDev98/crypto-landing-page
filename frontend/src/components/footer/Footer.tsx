import React from 'react';
import { FooterContainer } from './styles';

const Footer = () => {
    return (
        <>
            <hr/>
            <FooterContainer>
                <div>
                    <h3>Platform</h3>
                    <p>8000+ Coin Live Prices</p>
                    <p>35000+ NFT Floor Prices</p>
                    <p>CoinStats News Feed</p>
                    <p>24h Cryptocurrency Market Report</p>
                    <p>Crypto News</p>
                    <p>Crypto Portfolio Tracker</p>
                </div>
                <div>
                    <h3>Learn</h3>
                    <p>Connect Exchange Account</p>
                    <p>Connect Wallet Account</p>
                    <p>Trade Coins</p>
                    <p>Add Transactions</p>
                    <p>Profit/Loss Calculation</p>
                </div>
                <div>
                    <h3>Resources</h3>
                    <p>Press Kit</p>
                    <p>API Docs</p>
                    <p>Blog</p>
                    <p>Return Calculator</p>
                    <p>Crypto PL Calculator</p>
                    <p>Impermanent Loss Calculator</p>
                    <p>Crypto Converter</p>
                    <p>Bitcoin Ranbow Chart</p>
                    <p>Ethereum Rainbow Chart</p>
                    <p>Fear and Greed Index</p>
                </div>
                <div>
                    <h3>Other products</h3>
                    <p>MacOS Widget</p>
                    <p>Mozilla Extension</p>
                    <p>Chrome Extension</p>
                    <p>Apple TV</p>
                
                </div>
                <div>
                    <h3>Company</h3>
                    <p>Disclaimer</p>
                    <p>Pricing</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Refund Policy</p>
                </div>
                <div>
                    <h3>Contact us</h3>
                    <p>Careers</p>
                    <p>Help Center</p>
                    <p>Feature Request</p>
                    <p>Advertise at CoinStats</p>
                </div>
            </FooterContainer>
        </>
    );
};

export default Footer;