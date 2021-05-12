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
  price_change_24h,
}) {
  return (
    <div className='coin'>
      <img src={image} alt={name} className='coin__image' />
      <div className='coin__identifier'>
        <p className='coin__symbol'>{symbol}</p>
        <p className='coin__header'>{name}</p>
        <h4 className='coin__current-price'>${current_price}</h4>
      </div>

      <div className='coin__pricing'>
        
        <p className='coin__pricing-header'>24h chg</p>
{price_change_percentage_24h < 0 ? (
  <div>
    <p className="coin-percent__red">
      <b>{price_change_percentage_24h}% </b>
    </p>
    <p className="coin-percent__red">
   
      $ {price_change_24h}
    </p>
  </div>
) : (
  <div>
    <p className="coin-percent__green">
    <b>{price_change_percentage_24h}% </b>
    </p>
    <p className="coin-percent__green">
   
      $ {price_change_24h}
    </p>
  </div>
)}

      </div>

   
    </div>
  );
}

export default Coin;
//      <div className="coin__footer--priceChange">
// <p>24h change</p>
// {price_change_percentage_24h < 0 ? (
//   <div>
//     <p className="coin-percent__red">
//       {price_change_percentage_24h}%
//     </p>
//     <p className="coin-percent__red">
//     <KeyboardArrowDownIcon className="coin-percent__arrow"/>
//       $ <b>{price_change_24h}</b>
//     </p>
//   </div>
// ) : (
//   <div>
//     <p className="coin-percent__green">
//       {price_change_percentage_24h}%
//     </p>
//     <p className="coin-percent__green">
//     <KeyboardArrowUpIcon className="coin-percent__arrow" />
//       $ <b>{price_change_24h}</b>
//     </p>
//   </div>
// )}
// </div>
