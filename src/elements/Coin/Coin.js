import React from 'react'
import './Coin.css'
import numeral from "numeral";
function Coin({
    image,
    name,
    current_price,
    symbol,
    price_change_percentage_24h,
    market_cap
  }) {
    return (
        <div className='coin'>
      
        <img src={image} alt={name} className='coin__image' />
        <div className='coin__display-name'><p>{name}</p><p className='coin__symbol'>{symbol}</p></div>
      

      <div className='coin__pricing'>
      24h chg
        {price_change_percentage_24h < 0 ? (
          <p className='coin-percent__red'>
            <b>{price_change_percentage_24h.toFixed(3)}% </b>
          </p>
        ) : (
          <p className='coin-percent__green'>
            <b>+{price_change_percentage_24h.toFixed(3)}% </b>
          </p>
        )}
      </div>
      <p className="coin__current-price">Price: $ {current_price}</p>
      <p className="coin__market-cap">Mkt Cap: $ {numeral(market_cap).format("0,0e")}</p>
    </div>
    )
}

export default Coin
