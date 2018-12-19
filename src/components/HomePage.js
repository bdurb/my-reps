import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './HomePage.css'


class Homepage extends Component {

  render() { 
    return (
      <div className="App">
        <h1>Welcome to Find My Reps!
        The fastest way to find your Senator or Representative.</h1>
        <h3>What do you want to search for?</h3>
        <Link className="link" to='/senators'>Senators</Link>
        <Link className="link" to='/representatives'>Representatives</Link>
        <img src={require('./assets/flag.jpg')} alt="us flag"/>
      </div>
    )
  }
}
 
export default Homepage;