import React, { useState } from "react";
import Coin from "../Coin/Coin";
import CoinsSearchCoin from "../CoinSearch/CoinsSearchCoin";
import "./SearchForCoins.css";

function SearchForCoins({ coins }) {
  const [search, setSearch] = useState("");
  //filtering coins
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchCoins = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="searchforCoin__holder">
      <h3 className="searchforCoin__holder-header">Search For a Coin</h3>
      <form>
        <input
          type="text"
          placeholder="Coin Search"
          className="coin__search"
          onChange={searchCoins}
        />
      </form>
      <div className="searchforCoin__Coin-holder">
        {filteredCoins.map((coin) => (
          <CoinsSearchCoin
            key={coin.id}
            symbol={coin.symbol}
            image={coin.image}
            name={coin.name}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h.toFixed(3)}
            last_updated={coin.last_updated}
            market_cap={coin.market_cap.toLocaleString()}
            market_cap={coin.market_cap.toLocaleString()}
            total_supply={coin.total_supply}
            priceChange={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchForCoins;
