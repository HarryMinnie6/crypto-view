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
  // Getting global data
  useEffect(() => {
    fetch(" https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        console.log("fff", data);
        setTrendingCoins(data.coins);
      });

    console.log("trending", trendingCoins);
    // console.log("totalmktcp --->", Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));
    //   console.log("globaldata --->", Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));

    // console.log("total",  Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));
    // console.log("total",  Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));
  }, []);
  return (
    <div className="trendingCoinElement">
      {trendingCoins.map((coin) => (
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
  );
}

export default TrendingCoins;
