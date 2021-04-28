import React, { useEffect, useState } from "react";

import "./App.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
function App() {
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("coin");
  const [singleCoinInfo, setSingleCoinInfo] = useState({});
  const [coinInfo, setCoinInfo] = useState({});

  useEffect(() => {
    fetch("https://coinranking1.p.rapidapi.com/coins")
      .then((response) => response.json())
      .then((data) => {
        setCoinInfo(data);
      });
  }, []);

  useEffect(() => {
    const getAllCoinsData = async () => {
      await fetch("https://coinranking1.p.rapidapi.com/coins", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "491ccbcd4dmshd157ea3d7e474efp152ba1jsn60cc5fb9a981",
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let retrievedCoins = data.data.coins;

          setCoins(retrievedCoins);
          var delayInMilliseconds = 2000; //1 second

          setTimeout(function () {
            console.log("coins", coins);
          }, delayInMilliseconds);
        });
    };

    getAllCoinsData();
  }, []);

  const requestOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "491ccbcd4dmshd157ea3d7e474efp152ba1jsn60cc5fb9a981",
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  };

  const onCoinChange = async (event) => {
    const coinCode = event.target.value;
    console.log("coin code", coinCode);
    // setting state for the country...

    const url =
      coinCode === coin.id
        ? "https://coinranking1.p.rapidapi.com/coins"
        : `https://coinranking1.p.rapidapi.com/coin/${coinCode} `;

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCoin(coinCode);
        setCoinInfo(data);

        // console.log("coinInfo from url", coinInfo);
      });

    console.log("coin info >> ", coinInfo);
  };

  return (
    <div className='app'>
      <h1>test</h1>

      <FormControl>
        <Select
          className='header__selectBox'
          variant='outlined'
          value={coin}
          onChange={onCoinChange}
        >
          {/* All Coins option */}
          <MenuItem value='coin'>coin</MenuItem>

          {/* Renders all the coins */}
          {coins.map((coin) => (
            <MenuItem key={coin.name} value={coin.id}>
              {" "}
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {coins.map((coin) => (
        <div>
          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
          <p>{coin.iconUrl}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
