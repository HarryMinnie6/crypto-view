import React from "react";
import Moment from "react-moment";

import "./TrendingCoin.css";

function TrendingCoin({
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
  return (
    <div className="trendingCoin">
      <img src={image} alt={name} className="trendingCoin__image" />
      <div className="trendingCoin__display-name">
        <p>{name}</p>
        <p className="trendingCoin__symbol">{symbol}</p>
      </div>

      <p className="trendingCoin__current-price">$ {current_price}</p>
    </div>
  );
}

export default TrendingCoin;
