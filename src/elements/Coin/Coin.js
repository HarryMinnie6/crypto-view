import React, { useState, useToggle } from "react";
import "./Coin.css";
import InfoIcon from "@material-ui/icons/Info";
import numeral from "numeral";
function Coin({
  image,
  name,
  current_price,
  symbol,
  price_change_percentage_24h,
  market_cap,
  rank,
  price_change_24h,
}) {
  const [singleCoinDetails, setSingleCoinDetails] = useState([]);
  const [coinDescription, setCoinDescription] = useState("");
  const [coinExtraInfoDisplay, setCoinExtraInfoDisplay] = useState(false);
  function getCoinInfo() {
    fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSingleCoinDetails(data);
        setCoinDescription(data.description);
      });
    console.log("single coin", singleCoinDetails);

    // console.log("description", singleCoinDetails.description);
    // console.log("date", singleCoinDetails.genesis_date);
    // console.log("links", singleCoinDetails.links.homepage);
    // console.log("src code", singleCoinDetails.links.repos_url.github);
    // console.log("explorers", singleCoinDetails.links.blockchain_site);
    // console.log("oficial forum", singleCoinDetails.links.official_forum_url);
    // console.log("24h high", singleCoinDetails.market_data.high_24h);
    // console.log("24h low", singleCoinDetails.market_data.low_24h);
    // console.log("max supply", singleCoinDetails.market_data.max_supply);
    setCoinExtraInfoDisplay(!coinExtraInfoDisplay);

    //  console.log('desc', Object.values(singleCoinDetails.description)[0]);
    //  console.log('coindescription', Object.values(coinDescription)[0].replace(/<\/?[^>]+>/gi, ''));
  }

  return (
    <div className={coinExtraInfoDisplay ? "coin coin_extended" : "coin"}>
      <div className='coin__top'>
     
        <div className='coin__rank-holder'>
          <p className='coin-p'>Rank</p>
          <p className='coin-p'>1</p>
        </div>
        <div className='coin__name-and-image-holder'>
          <img src={image} className='coin__image' />
          <div className='coin__name'>
            <p className='coin-p name'>{name}</p>
            <p className='coin-p coin_symbol'>{symbol}</p>
          </div>
        </div>
        <div className='coin__current-price-holder'>
          <p className='coin-p '>Price</p>
          <p className='coin-p'>${current_price.toFixed(2)}</p>
        </div>
        <div className='coin__price-change-holder'>
          <p className='coin-p'>24h chg</p>
          {price_change_percentage_24h < 0 ? (
            <p className='coin-percent__red coin-p'>
              {!price_change_percentage_24h
                ? "loading"
                : price_change_percentage_24h.toFixed(3)}
              %{" "}
            </p>
          ) : (
            <p className='coin-percent__green coin-p'>
              +
              {!price_change_percentage_24h
                ? "loading"
                : price_change_percentage_24h.toFixed(3)}
              %{" "}
            </p>
          )}
        </div>
        <div className='coin__market-cap-holder'>
          <p className='coin-p'>Mkt cap</p>
          <p className='coin__market-cap coin-p'>
            ${numeral(market_cap).format("0,0e")}
          </p>
        </div>
        <div className='coin_button'><InfoIcon className='coin__more-info' onClick={getCoinInfo} /></div>
        
      </div>
      <div className={ coinExtraInfoDisplay ? "coin__bottom-display" : "coin__bottom"}>
      
      dddd</div>
    </div>
  );
}

export default Coin;

// <div className={coinExtraInfoDisplay ? "coin coin_extended" : "coin"} >
//       <img src={image} alt={name} className="coin__image" />
//       <div className="coin__display-name">
//         <p>{name}</p>
//         <p className="coin__symbol">{symbol}</p>
//       </div>
//       <div className="coin__rank">#{rank}</div>

//       <div className="coin__pricing">
//         24h chg
//         {price_change_percentage_24h < 0 ? (
//           <p className="coin-percent__red">
//             <b>{price_change_percentage_24h.toFixed(3)}% </b>
//           </p>
//         ) : (
//           <p className="coin-percent__green">
//             <b>+{price_change_percentage_24h.toFixed(3)}% </b>
//           </p>
//         )}
//       </div>
//       <div className="coin__pricing-dollar">
//         {price_change_24h < 0 ? (
//           <p className="coin-percent__red">$ {price_change_24h.toFixed(2)}</p>
//         ) : (
//           <p className="coin-percent__green">
//             $ +{price_change_24h.toFixed(2)}
//           </p>
//         )}
//       </div>
//       <p className="coin__current-price">Price: $ {current_price}</p>
//       <p className="coin__market-cap">
//         Mkt Cap: $ {numeral(market_cap).format("0,0e")}
//       </p>
//       <InfoIcon className='coin__more-info' onClick={getCoinInfo}/>
      // <div className={ coinExtraInfoDisplay ? "coin__more-info-holder2" : "coin__more-info-holder"}>

      // <p>explorers: {!coinDescription ? "loading" : singleCoinDetails.links.blockchain_site} </p>
      // <p>Official forum: {!coinDescription ? "loading" : singleCoinDetails.links.official_forum_url[0]} </p>
      // <p>Source Code: {!coinDescription ? "loading" : singleCoinDetails.links.repos_url.github[0]} </p>
      // <p>site: {!coinDescription ? "loading" : singleCoinDetails.links.homepage} </p>
      // <p>max supply: {!coinDescription ? "loading" : singleCoinDetails.market_data.max_supply.toLocaleString()} </p>
      // <p>description: {!coinDescription ? "loading" : Object.values(coinDescription)[0].replace(/<\/?[^>]+>/gi, '')}</p>

      // </div>
//     </div>
