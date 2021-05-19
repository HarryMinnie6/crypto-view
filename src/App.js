import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AllCoins from "./components/AllCoins/AllCoins";
import GlobalData from "./components/GlobalData/GlobalData";
import Header from "./components/Header/Header";
import TrendingCoins from "./components/TrendingCoins/TrendingCoins";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/AllCoins">
          <Header />
          <GlobalData />
          <AllCoins />
        </Route>

        <Route path="/">
          <Header />
          <GlobalData />
          <TrendingCoins />
          <AllCoins />
        </Route>
      </Switch>
    </Router>
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
