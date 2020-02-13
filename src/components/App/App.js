import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {Home, Coin, PageNotFound} from "../../pages";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/page/:numPage'} component={Home}/>
            <Route path={'/coins/:id'} component={Coin}/>
            <Route path={'*'} component={PageNotFound} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
