import React from "react";
import Moment from "react-moment";
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
}) {
  return (
    <div className='coin'>
      <div className='coin__header'>
        <div className='coin__image--holder'>
          <img src={image} alt='crypto coin' />
        </div>
        <h1>{name}</h1>
        <p>{symbol}</p>
        <p>
          <Moment date={last_updated} format='LTS' />
        </p>
        {price_change_percentage_24h < 0 ? (
          <p className='coin-percent__red'>{price_change_percentage_24h}%</p>
        ) : (
          <p className='coin-percent__green'>{price_change_percentage_24h}%</p>
        )}
      </div>

      <div className='coin__footer'>
        <p> Market Cap $ {market_cap}</p>
        <p> total supply $ {total_supply ? total_supply : "No Limit"}</p>
        <p> Current Price $ {current_price}</p>
      </div>
    </div>
  );
}

export default Coin;
