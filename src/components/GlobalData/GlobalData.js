import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Moment from "react-moment";
import numeral from "numeral";
import "./GlobalData.css";
function GlobalData() {
  const [global_data, setGlobal_data] = useState([]);
  const [totalMarketCap, setTotalMarketCap] = useState(null);
  //  const [totalVolume, setVolume] = useState([]);

  // Getting global data
  useEffect(() => {
    fetch(" https://api.coingecko.com/api/v3/global")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGlobal_data(data.data);
      });

    console.log("global data", global_data);
    // console.log("totalmktcp --->", Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));
    //   console.log("globaldata --->", Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));

    // console.log("total",  Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));
    // console.log("total",  Object.values(global_data.total_market_cap).reduce((a, b) => a + b, 0));
  }, []);

  return (
    <div className='globalData'>
      <div className='globalData__display'>
        <p> Active coins: {global_data.active_cryptocurrencies}</p>
      </div>
      <div className='globalData__display'>
        <p>
          Total Market Cap: $
          {!global_data.total_market_cap
            ? "loading"
            : `${numeral(
                Object.values(global_data.total_market_cap)
                  .reduce((a, b) => a + b, 0)
                  .toLocaleString()
              ).format("0,0 a").toUpperCase()}`}
        </p>
      </div>

      <div className='globalData__display'>
        Market cap change (24h): 
        {!global_data.market_cap_change_percentage_24h_usd < 0 ? (
          <p className='globalData__change-green'>
             +{!global_data.market_cap_change_percentage_24h_usd
              ? "loading"
              : global_data.market_cap_change_percentage_24h_usd.toFixed(3)}
            %
          </p>
        ) : (
          <p className='globalData__change-red'>
             {!global_data.market_cap_change_percentage_24h_usd
              ? "loading"
              : global_data.market_cap_change_percentage_24h_usd.toFixed(3)}
            %
          </p>
        )}
      </div>
      <div className='globalData__display'>
        <p>
          Total Volume: 
          {!global_data.total_volume
            ? "loading"
            : ` $${numeral(
                Object.values(global_data.total_volume)
                  .reduce((a, b) => a + b, 0)
                  .toLocaleString()
              ).format("0,0 a").toUpperCase()}`}
        </p>
      </div>
    </div>
  );
}

export default GlobalData;
