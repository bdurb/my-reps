import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import Senator from './components/Senator'
import Rep from './components/Rep'
import RepDetails from './components/RepDetails'
import SenatorDetails from './components/SenatorDetails'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/senators' component={Senator} />
        <Route path='/representatives' component={Rep} />
        <Route path='/senator-details' component={SenatorDetails} />
        <Route path='/representative-details' component={RepDetails} />
      </div>
    );
  }
}

export default App;
