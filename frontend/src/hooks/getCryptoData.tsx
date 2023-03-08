import React,{useState,useEffect} from 'react';
import axios from 'axios';

const getCryptoData = () => {
    const [cryptoData,setCryptoData] = useState()
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=24h')
  .then(response => {
    setCryptoData(response.data)
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
    },[])
    return cryptoData
};

export default getCryptoData;