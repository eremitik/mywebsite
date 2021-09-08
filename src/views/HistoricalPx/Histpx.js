import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Histpx.css';

const crypto = {
  '1INCH': '1inch',
  'AAVE': 'aave',
  'ADX': 'adex',
  'AKRO': 'akropolis',
  'ANT': 'aragon',
  'APPC': 'appcoins',
  'AST': 'airswap',
  'BAL': 'balancer',
  'BAND': 'band-protocol',
  'BAT': 'basic-attention-token',
  'BNT': 'bancor',
  'BQX': 'ethos',
  'BRD': 'bread',
  'BTC': 'bitcoin',
  'BTM': 'bytom',
  'CHZ': 'chiliz',
  'CND': 'cindicator',
  'COMP': 'compound-governance-token',
  'CRO': 'crypto-com-chain',
  'CRV': 'curve-dao-token',
  'DENT': 'dent',
  'DLT': 'agrello',
  'DOCK': 'dock',
  'DODO': 'dodo',
  'ENJ': 'enjincoin',
  'ETH': 'ethereum',
  'EVX': 'everex',
  'GLM': 'golem',
  'GRT': 'the-graph',
  'GTO': 'gifto',
  'HOT': 'holotoken',
  'HT': 'huobi-token',
  'KNC': 'kyber-network',
  'LEO': 'leo-token',
  'LINK': 'link',
  'LRC': 'loopring',
  'MANA': 'decentraland',
  'MATIC': 'matic-network',
  'MKR': 'maker',
  'MTH': 'monetha',
  'NEST': 'nest',
  'NEXO': 'nexo',
  'NMR': 'numeraire',
  'OAX': 'openanx',
  'OCEAN': 'ocean-protocol',
  'OGN': 'origin-protocol',
  'OMG': 'omisego',
  'OST': 'simple-token',
  'OXT': 'orchid-protocol',
  'PAXG': 'pax-gold',
  'PNT': 'pnetwork',
  'POLY': 'polymath-network',
  'POWR': 'power-ledger',
  'REN': 'republic-protocol',
  'RLC': 'iexec-rlc',
  'RSR': 'reserve-rights-token',
  'SNM': 'sonm',
  'SNX': 'havven',
  'SOC': 'all-sports',
  'SRM': 'serum',
  'STORJ': 'storj',
  'SUSHI': 'sushi',
  'SXP': 'swipe',
  'TRU': 'truefi',
  'UMA': 'uma',
  'UNI': 'uniswap',
  'UOP': 'utopia-genesis-foundation',
  'VALUE': 'value-liquidity',
  'WABI': 'wabi',
  'wBTC': 'wrapped-bitcoin',
  'YFI': 'yearn-finance',
  'YFII': 'yfii-finance',
  'ZRX': '0x'
}


const cryptoNames = Object.values(crypto)
const tickers = Object.keys(crypto)
const days = 7


const urlCrypto = (crypto) => {
  let cryptoArr = []
  for(let i=0; i<cryptoNames.length; i++){
    //cryptoArr.push(axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoNames[i]}/market_chart?vs_currency=usd&days=${days}&interval=daily`))
    cryptoArr.push(`https://api.coingecko.com/api/v3/coins/${cryptoNames[i]}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
  }
  return cryptoArr
}
const url = urlCrypto(crypto)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


function Histpx() {

  const [coins, setCoins] = useState({ data: [] })
  const [count, setCount] = useState(1)

  const fetchUrl = async (url, index) => {
    let priceArray = []
    let coinObj = {}
    return await axios.get(url).then((response) => {
      const prices = response.data.prices;
      for (let i=0; i<prices.length; i++){
        priceArray.push(prices[i][1])
      }
      coinObj.symbol = tickers[index]
      coinObj.prices = priceArray
      return coinObj
    })
  }

  const fetchData = () => {
    (async () => {
      let arrayQ = [];
      let cycles = 1
      for (let i=0; i<url.length; i++){
        await delay(800);
        await fetchUrl(url[i], i).then((coinObj) => {
          arrayQ.push(coinObj);
          setCoins({ data: [...data, coinObj] });
          setCount(cycles++)
        })
        setCoins({ data: [...arrayQ] })
      }
    })()
  }

  const addCount = () => {
    setCount(count + 1)
  }
 
  useEffect(()=>{                                                                                                                     
      fetchData();                                                                                                                        
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);                                                                                                                                

  const {data} = coins

  /*
  const copyTable = () => {
    const elTable = document.querySelector('coin-table');
    let range;
    let sel;

    if (document.createRange && window.getSelection) {

      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();

      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }

      document.execCommand('copy');
    }

    sel.removeAllRanges();
    console.log('Element copied! Paste it in a file')
  }
  */

  return (
    <div className="coin-app">
      <h1 style={{textAlign: "center"}}>📈Historical prices</h1>
      <p style={{textAlign: "center"}}>This project was made with Coingecko API.<br/>{url.length - count} crypto left to go.</p>
      <table className="coin-table" id="coin-table"> 
        <thead>
        <tr>
          <th style={{width:'50px'}}>Symbol</th>
          <th style={{width:'200px'}}>T-8</th>
          <th style={{width:'200px'}}>T-7</th>
          <th style={{width:'200px'}}>T-6</th>
          <th style={{width:'200px'}}>T-5</th>
          <th style={{width:'200px'}}>T-4</th>
          <th style={{width:'200px'}}>T-3</th>
          <th style={{width:'200px'}}>T-2</th>
          <th style={{width:'200px'}}>T-1</th>
        </tr>
        </thead>
      <tbody>
        {data.map(function (coin, index) {
          return (
            <tr key={coin.symbol}>
              <td>{coin.symbol}</td>
              {coin.prices.map((price, index) => {
                return <td key={index}>{price}</td>
              })}
            </tr>
          );
        })}
      </tbody>
      </table>
      <p style={{textAlign:"center", fontSize:"8rem", fontWeight:"bold", letterSpacing:"-4px"}}>
         <Link to='/projects'>back</Link>
      </p>

    </div>
  );
}

export default Histpx;
