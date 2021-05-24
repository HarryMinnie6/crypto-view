import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import TrendingCoin from "../../elements/TrendingCoin/TrendingCoin";

import "./TrendingCoins.css";

function TrendingCoins({
  image,
  symbol,
  name,
  current_price,
  price_change_percentage_24h,
  last_updated,
  market_cap,
  total_supply,
  price_change_24h
}) {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [usdValue, setUSDValue] = useState([]);
  // Getting global data
  useEffect(() => {
    fetch(" https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        console.log("fff", data);
        setTrendingCoins(data.coins);
      });

    console.log("trending", trendingCoins);
    
  }, []);
  // Getting global data
  useEffect(() => {
    fetch(" https://api.coingecko.com/api/v3/exchange_rates")
      .then((response) => response.json())
      .then((data) => {
        console.log("fff", data);
        setUSDValue(data);
      });

    console.log("usd price", usdValue);
    
  }, []);
  return (
    <div className="trendingCoins">
    <p className="trendingCoins_header">Top 5 trending coins</p>
    <div className="trendingCoins__display">
      {trendingCoins.slice(0,5).map((coin) => (
        <TrendingCoin
          image={coin.item.large}
          symbol={coin.item.symbol}
          name={coin.item.name}
          current_price={coin.item.price_btc}
          market_cap_rank={coin.item.market_cap_rank}
          price_change_percentage_24h={"k"}
          last_updated={"k"}
          total_supply={"k"}
          price_change_24h={"k"}
        />
      ))}
      </div>
    </div>
  );
}

export default TrendingCoins;
