import React from 'react';
import './App.css';
import Home from './pages/Home'
import Ms from './pages/Ms'

import {Switch,Route,Redirect,NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/ms" component={Ms}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
