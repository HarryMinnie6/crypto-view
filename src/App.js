import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import GlobalData from './components/GlobalData/GlobalData'
import AllCoins from './components/AllCoins/AllCoins'
import TrendingCoins from './components/TrendingCoins/TrendingCoins'

function App() {
  return (
    <div className="app">
    <Header />
    <GlobalData />
    {/* display top 5 coins*/}
    <div className="app_top">
    </div>

    {/* Total Market Cap*/}

    <div className="app_bottom">
      <div className="app_bottom--left">
      <AllCoins/>
      </div>
      
      <div className="app_bottom--right">
      <TrendingCoins/>
      </div>
    </div>
    {/* Search for a Coin*/}

    {/* display top 5 coins in a side scroll bar*/}
  </div>
  );
}

export default App;
// <Router>
// <Switch>

//   <Route path='/Exchanges'></Route>

//   <Route path='/'>

//   </Route>
// </Switch>
// </Router>
// <Router>
// <Switch>
//   <Route path="/AllCoins">
//     <Header />
//     <GlobalData />
//     <AllCoins />
//   </Route>

//   <Route path="/">
//     <Header />
//     <GlobalData />
//     <TrendingCoins />
//     <AllCoins />
//   </Route>
// </Switch>
// </Router>
