import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameList from './pages/GameList';
import GameDetail from './pages/GameDetail';

class App extends Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path='/game/list' element={<GameList/>}/>
          <Route exact path='/game/detail/rock-scissor-paper' element={<GameDetail />}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
