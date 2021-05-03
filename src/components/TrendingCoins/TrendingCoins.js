import React, { useEffect, useState } from "react";

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  useEffect(() => {
    fetch("https://coinranking1.p.rapidapi.com/coins")
      .then((response) => response.json())
      .then((data) => {
        setTrendingCoins(data);
      });
    console.log("trending coins ->", trendingCoins);
  }, []);
  return <div>
  trending coins</div>;
}

export default TrendingCoins;
