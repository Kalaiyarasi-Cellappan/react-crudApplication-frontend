import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Inputstudent from './components/Inputstudent'
import Liststudent from './components/Liststudent'
function App() {
  return (
    <>
    <div>
    <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Inputstudent}/>
          <Route exact path="/list" component={Liststudent}/>
          </Switch>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;