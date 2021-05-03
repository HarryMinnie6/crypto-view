const getAllCoinsData = async () => {
    await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCoins(data)
        
      });
      console.log('coins --->', coins);
  };