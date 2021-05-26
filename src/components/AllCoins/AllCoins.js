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
      <p className='allCoins_header'>Coin Rank By Market Cap</p>
      <form>
        <input
          type='text'
          placeholder='Search for a coin'
          className='coin__search'
          onChange={searchCoins}
        />
      </form>
      <div className='allCoins__display'>
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.id}
            image={coin.image}
            symbol={coin.symbol}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h}
            price_change_24h={coin.price_change_24h}
            market_cap={coin.market_cap}
            rank={coin.market_cap_rank}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCoins;
