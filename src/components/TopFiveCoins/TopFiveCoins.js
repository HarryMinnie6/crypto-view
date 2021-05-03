import React from 'react'
import Coin from '../Coin/Coin'
function TopFiveCoins({coins}) {
    return (
        <div>
        {coins.slice(0, 5).map((coin) => (
            <Coin
              key={coin.id}
              symbol={coin.symbol}
              image={coin.image}
              name={coin.name}
              current_price={coin.current_price}
              price_change_percentage_24h={coin.price_change_percentage_24h}
              last_updated={coin.last_updated}
              market_cap={coin.market_cap}
              total_supply={coin.total_supply}
            />
          ))}
            
        </div>
    )
}

export default TopFiveCoins
