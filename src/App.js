import React, { useEffect, useState } from "react";

import "./App.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import Coin from "./components/Coin/Coin";
import TrendingCoins from "./components/TrendingCoins/TrendingCoins";
import SearchForCoins from "./components/SearchForCoins/SearchForCoins";
import TopFiveCoins from "./components/TopFiveCoins/TopFiveCoins";
import Header from "./components/Header/Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("coin");
  const [singleCoinInfo, setSingleCoinInfo] = useState({});
  const [coinInfo, setCoinInfo] = useState({});
  const [search, setSearch] = useState("");

  const searchCoins = (event) => {
    setSearch(event.target.value);
  };

  {
    /* getting all the coins*/
  }
  useEffect(() => {
    const getAllCoinsData = async () => {
      await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCoins(data);
        });
      console.log("coins --->", coins);
    };

    getAllCoinsData();
  }, []);

  return (
    <div className="app">
      <Header />
      {/* display top 5 coins*/}
      <div className="app_top">
        <TopFiveCoins coins={coins} />
      </div>

      {/* Total Market Cap*/}

      <div className="app_bottom">
        <div className="app_bottom--left">
          <SearchForCoins coins={coins} />
        </div>
        <div className="app_bottom--right">
          <TrendingCoins />
        </div>
      </div>
      {/* Search for a Coin*/}

      {/* display top 5 coins in a side scroll bar*/}
    </div>
  );
}

export default App;
