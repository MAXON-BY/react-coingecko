import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from "../../pages/Home";
import Coin from "../../pages/Coin";
import PageNotFound from "../../pages/PageNotFound";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/coins/:id'} component={Coin}/>
            <Route path={'*'} component={PageNotFound} />
        </Switch>
    </div>
  );
}

export default App;
