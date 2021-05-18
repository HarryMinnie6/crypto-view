import React, { useState, useEffect } from "react";
import Coin from '../../elements/Coin/Coin'

import "./AllCoins.css";
import SearchCoin from "../../elements/SearchCoin/SearchCoin";
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
  }, []);

  return (
    <div className='allCoins'>
      <form>
        <input
          type='text'
          placeholder='Coin Search'
          className='coin__search'
          onChange={searchCoins}
        />
      </form>
      <div className='allCoins__display'>
      
          {filteredCoins.map((coin) => (
          
            <Coin name={coin.id}
            image={coin.image}
            symbol={coin.symbol}
            current_price={coin.current_price}
            price_change_percentage_24h ={coin.price_change_percentage_24h}
            price_change_24h={coin.price_change_24h}
            market_cap={coin.market_cap}
            />
          ))}
       
          </div>
     

      
    </div>
  );
}

export default AllCoins;
