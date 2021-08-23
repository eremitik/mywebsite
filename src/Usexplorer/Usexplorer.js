import React, { useEffect } from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './Usexplorer.css'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import uniswapLogo from '../images/uniswap-logo.png'
import daiLogo from '../images/dai-logo.png'
import zeroxLogo from '../images/zerox.png'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'
  }),
  fetchOptions: {
    mode: 'no-cors'
  },
  cache: new InMemoryCache()
})

const DAI_QUERY = gql`
  query tokens($tokenAddress: Bytes!){
    tokens(where: {id: $tokenAddress}){
      derivedETH
      tradeVolumeUSD
    }
  }
`

const ETH_PRICE_QUERY = gql`
  query bundles {
    bundles(where: {id: "1"}){
      ethPrice
    }
  }
`

const UNI_QUERY = gql`
  query tokens($tokenAddress: Bytes!){
    tokens(where: {id: $tokenAddress}){
      derivedETH
      tradeVolumeUSD 
    }
  }
`

const ZRX_QUERY = gql`
  query token($tokenAddress: Bytes!){
    tokens(where: {id: $tokenAddress}){
      derivedETH
      tradeVolumeUSD
    }
  }
`

function Usexplorer() {
  const {loading: ethLoading, data: ethPriceData} = useQuery(ETH_PRICE_QUERY)
  const {loading: daiLoading, data: daiData} = useQuery(DAI_QUERY, {
    variables: {
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f'
    }
  })
  const {loading: uniLoading, data: uniData} = useQuery(UNI_QUERY, {
    variables: {
      tokenAddress: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
    }
  })
  const {loading: zrxLoading, data: zrxData} = useQuery(ZRX_QUERY, {
    variables: {
      tokenAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498'
    }
  })

  const daiPriceInEth = daiData && daiData.tokens[0].derivedETH
  const daiTradeVolumeUSD = daiData && daiData.tokens[0].tradeVolumeUSD
  const uniPriceInEth = uniData && uniData.tokens[0].derivedETH
  const uniTradeVolumeUSD = uniData && uniData.tokens[0].tradeVolumeUSD
  const zrxPriceInEth = zrxData && zrxData.tokens[0].derivedETH
  const zrxTradeVolumeUSD = zrxData && zrxData.tokens[0].tradeVolumeUSD
  const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice

  function formatNum(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="Usexplorer">
      <div style={{textAlign:"center"}}>
        <h1 style={{fontSize:"2.5rem", fontWeight:"bold"}}>🦄Uniswap Explorer</h1>
        <p style={{fontSize:"0.8rem"}}>This simple page was made with GraphQL, using &nbsp; 
          <a href="https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2?query=Example%20query">Uniswap V2 subgraph.</a></p>
      <div >
        <br/>

        <div style={{display:"inline-block"}}>

          <div style={{textAlign:"left", fontSize:"1rem"}}>
                <p>
                <img src={daiLogo} width="30" height="30" className="mb-2" alt="" />
                  DAI (Dai Stable Token) 
                  <br/>
                  Price: {' '}
                  {ethLoading || daiLoading
                    ? 'Loading token data...'
                    : '$' + 
                    (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}
                  <br/>
                  Trade volume:{' '}
                  {daiLoading
                    ? 'Loading token data...'
                    : '$' + formatNum(parseFloat(daiTradeVolumeUSD).toFixed(0))}
                </p>
              </div>
              <br/>

              <div style={{textAlign:"left", fontSize:"1rem"}}>
                <p>
                <img src={uniswapLogo} width="30" height="30" className="mb-2" alt="" />
                  UNI (Uniswap)
                  <br/>
                  Price: {' '}
                  {ethLoading || uniLoading
                    ? 'Loading token data...'
                    : '$' + 
                    (parseFloat(uniPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}
                  <br/>
                  Trade volume:{' '}
                  {uniLoading
                    ? 'Loading token data...'
                    : '$' + formatNum(parseFloat(uniTradeVolumeUSD).toFixed(0))}
                </p>
              </div>
              <br/>

              <div style={{textAlign:"left", fontSize:"1rem"}}>
                <p>
                <img src={zeroxLogo} width="30" height="30" className="mb-2" alt="" />
                  ZRX (0x Protocol)
                  <br/>
                  Price: {' '}
                  {ethLoading || zrxLoading
                    ? 'Loading token data...'
                    : '$' + 
                    (parseFloat(zrxPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}
                  <br/>
                  Trade volume:{' '}
                  {zrxLoading
                    ? 'Loading token data...'
                    : '$' + formatNum(parseFloat(zrxTradeVolumeUSD).toFixed(0))}
                </p>

              </div>
            </div>
        </div>
      </div>
        <p style={{letterSpacing:"-4px", fontSize:"8rem", color:"white", fontWeight:"bold", textAlign:"center"}}><Link to='/projects'>back</Link>
        </p>
    </div>
    
  );
}

export default Usexplorer;
