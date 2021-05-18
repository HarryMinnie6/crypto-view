import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AllCoins from "./components/AllCoins/AllCoins";
import GlobalData from "./components/GlobalData/GlobalData";
import Header from "./components/Header/Header";

function App() {
  const [search, setSearch] = useState("");
 

  const searchCoins = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <Router>
      <Switch>
        <Route path='/AllCoins'>
        <Header />
        <GlobalData />
          <AllCoins />
        </Route>

        <Route path='/'>
          <Header />
          <GlobalData />
          <AllCoins/>
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
