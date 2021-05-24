import React from "react";
import "./SearchCoin.css";
import InfoIcon from '@material-ui/icons/Info';
import numeral from "numeral";

function SearchCoin(key,
    name,
      image,
      symbol,
      current_price,
      price_change_percentage_24h,
      price_change_24h,
      market_cap,
      rank) {
  return (
    <div className='searchCoin'>
      <div className='searchCoin__rank-holder'>
        <p>Rank</p>
        <p>1</p>
      </div>
      <div className='searchCoin__name-and-image-holder'>
        <img src={image}  />
        <div className='searchCoin__name'>
          <p>{name}</p>
          <p>{symbol}</p>
        </div>
      </div>
      <div className='searchCoin__current-price-holder'>
        <p>{current_price}</p>
      </div>
      <div className='searchCoin__price-change-holder'>
        <p>24h chg</p>
        {price_change_percentage_24h < 0 ? (
          <p className="coin-percent__red">
            <b>{!price_change_percentage_24h ? 'loading' : price_change_percentage_24h.toFixed(3)}% </b>
          </p>
        ) : (
          <p className="coin-percent__green">
            <b>+{!price_change_percentage_24h ? 'loading' : price_change_percentage_24h.toFixed(3)}%  </b>
          </p>
        )}
      </div>
      <div className='searchCoin__market-cap-holder'>
        <p>Mkt Cap: {numeral(market_cap).format("0,0e")}</p>
      </div>
    </div>
  );
}

export default SearchCoin;
