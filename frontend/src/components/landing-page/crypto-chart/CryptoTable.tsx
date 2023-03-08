import React from 'react';
import {CryptoTbl,GreyH4Title,WhiteH2Title} from './styles'
import getCryptoData from '../../../hooks/getCryptoData';
const CryptoTable = ()=> {
    const cryptoData = getCryptoData()
    return (
        <>
            <WhiteH2Title>Best Coin Price Tracker in the Market</WhiteH2Title>
            <GreyH4Title>Stay ahead of the game with live crypto updates.</GreyH4Title>
            <CryptoTbl>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>Price Graph(7D)</th>
                </tr>
                {
                    cryptoData?.map((row)=>{
                        return (
                            <tr>
                                <td>{row.market_cap_rank}</td>
                                <td style={{display:'flex',gap:20,justifyContent:'center',alignItems:'center'}}>
                                    <div style={{justifyContent: 'end',flex: 2,display: 'flex'}}>
                                        <img src={row.image} style={{maxWidth:"30px"}} width="30px" alt={row.id}/>
                                    </div>
                                    <span style={{flex:2,display:'flex'}}>{row.id}</span>
                                </td>
                                <td>{row.current_price}</td>
                                <td>{row.price_change_percentage_24h.toFixed(2)}</td>
                                {/* TODO : Generate actual sparkline */}
                                <td><img className="coin-graph-up" src="https://static.coinstats.app/sparks/bitcoin_1w.png" alt=""/></td>
                            </tr>
                        )
                    })
                }
            </CryptoTbl>
        </>
    );
}

export default CryptoTable;