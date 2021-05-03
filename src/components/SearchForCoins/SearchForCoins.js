import React,{useState} from "react";
import Coin from '../Coin/Coin'
function SearchForCoins({coins}) {
  const [search, setSearch] = useState("");
  //filtering coins
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchCoins = (event) => {
    setSearch(event.target.value);
  };

  
  return (
    <div>
    <h1>search for a coin</h1>
      <form>
        <input
          type='text'
          placeholder='Coin Search'
          className=''
          onChange={searchCoins}
        />
      </form>
      <div>
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            symbol={coin.symbol}
            image={coin.image}
            name={coin.name}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h}
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
