import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import './App.scss';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
          <Route component={ Navbar } />
          <Route path='/' exact component={ Home } />
        </div>
      </Router>
    );
  }
}

export default App;
