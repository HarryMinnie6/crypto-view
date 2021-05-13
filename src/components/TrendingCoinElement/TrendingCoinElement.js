import React from "react";
import Moment from "react-moment";

import "./TrendingCoinElement.css";

function TrendingCoinElement({
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
    <div className="trendingCoinElement">
      <img src={image} alt={name} className="trendingCoinElement__image" />
      <div className="trendingCoinElement__identifier">
        <p className="trendingCoinElement__symbol">{symbol}</p>
        <p className="trendingCoinElement__header">{name}</p>
        <h4 className="trendingCoinElement__current-price">
          ${current_price.toFixed(9)}
        </h4>
      </div>

      <div className="trendingCoinElement__pricing">
        <p className="trendingCoinElement__pricing-header">Mkt cap rank</p>

        <div>
          <p className="trendingCoinElement__header">
            <b>{market_cap} </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrendingCoinElement;
