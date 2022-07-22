import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameList from './pages/GameList';

class App extends Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path='/list' element={<GameList/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
