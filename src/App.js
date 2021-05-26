import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import GlobalData from "./components/GlobalData/GlobalData";
import Information from "./components/Information/Information";
import AllCoins from "./components/AllCoins/AllCoins";
import TrendingCoins from "./components/TrendingCoins/TrendingCoins";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Header />
      <GlobalData />
      <Information />
      <div className='app_top'></div>

      <div className='app_bottom'>
        <div className='app_bottom--left'>
          <AllCoins />
        </div>

        <div className='app_bottom--right'>
          <TrendingCoins />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
