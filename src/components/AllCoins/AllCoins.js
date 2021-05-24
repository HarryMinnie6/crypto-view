import React, { useState, useEffect } from "react";
import Coin from "../../elements/Coin/Coin";
import SearchCoin from "../../elements/SearchCoin/SearchCoin";
import InfoIcon from "@material-ui/icons/Info";
import numeral from "numeral";

import "./AllCoins.css";
function AllCoins() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  //filtering coins
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchCoins = (event) => {
    setSearch(event.target.value);
  };

  // Getting all Coins
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
      });
      console.log("allcoins", coins);
  }, []);

  return (
    <div className='allCoins'>
      <p className='trendingCoins_header'>Coins rank by market cap</p>
      <form>
        <input
          type='text'
          placeholder='Coin Search'
          className='coin__search'
          onChange={searchCoins}
        />
      </form>
    
          {filteredCoins.map((coin) => (
<Coin key = {coin.id}
name={coin.id}
  image={coin.image}
  symbol={coin.symbol}
  current_price={coin.current_price}
  price_change_percentage_24h={coin.price_change_percentage_24h}
  price_change_24h={coin.price_change_24h}
  market_cap={coin.market_cap}
  rank={coin.market_cap_rank}/>
          ))}

          {/*<tr>
      <td>123456</td>
      <td>4</td>
      <td>michael jordan/ 12:55</td>
    </tr>*/}
       
    </div>
  );
}

export default AllCoins;

// key = {coin.id}
//           name={coin.id}
//             image={coin.image}
//             symbol={coin.symbol}
//             current_price={coin.current_price}
//             price_change_percentage_24h={coin.price_change_percentage_24h}
//             price_change_24h={coin.price_change_24h}
//             market_cap={coin.market_cap}
//             rank={coin.market_cap_rank}

//    {filteredCoins.map((coin) => (
//   <Coin key = {coin.id}
//   name={coin.id}
//     image={coin.image}
//     symbol={coin.symbol}
//     current_price={coin.current_price}
//     price_change_percentage_24h={coin.price_change_percentage_24h}
//     price_change_24h={coin.price_change_24h}
//     market_cap={coin.market_cap}
//     rank={coin.market_cap_rank}
//   />
// ))}
