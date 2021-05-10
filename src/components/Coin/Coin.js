import React from "react";
import Moment from "react-moment";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import "./Coin.css";

function Coin({
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
    <div className="coin">
      <div className="coin__header">
        <div className="coin__header-left">
          <h2>{name}</h2>
          <div>
            <img src={image} alt={name} className="coin__image" />
            <div>
              <p>{symbol}</p>
              <p>${current_price}</p>
            </div>
          </div>
        </div>

        <div className="coin__header-right">
          <div className="coin__footer--priceChange">
            <p>24h change</p>
            {price_change_percentage_24h < 0 ? (
              <div>
                <p className="coin-percent__red">
                  <ArrowDownwardIcon className="coin-percent__arrow" />
                  {price_change_percentage_24h}%
                </p>
                <p className="coin-percent__red">
                  $ <b>{price_change_24h}</b>
                </p>
              </div>
            ) : (
              <div>
                <p className="coin-percent__green">
                  <ArrowUpwardIcon className="coin-percent__arrow" />
                  {price_change_percentage_24h}%
                </p>
                <p className="coin-percent__green">
                  $ <b>{price_change_24h}</b>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="coin__footer">graph</div>

      <div></div>
      <div></div>
    </div>
  );
}

export default Coin;
