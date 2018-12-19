import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Senator.css'

class Senator extends Component {
  state = {
    selectedState: 'AL',
    senators: []
  }
  

  handleChange = (e) => {
    this.setState({selectedState: e.target.value})
  }
  handleClick = () => {
    axios.get(`http://localhost:3000/senators/${this.state.selectedState}`)
      .then(res => {
        console.log(res)
        this.setState({senators: res.data.results})
      })
  }


  render() { 
    return (
      <div className="main-senator">
        <img className="map" src={require('./assets/map.jpg')} alt="us map" />
        <br/><Link className="home-button" to='/'>Home</Link>
        <h1>Please Choose Your State</h1>
        <select value={this.state.selectedState} onChange={this.handleChange}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <button className="senator-button" onClick={this.handleClick}>See Your Senators</button>
        {this.state.senators.map(senator => {
          return (
          <div className="senators" key={senator.name}>
            <Link
              to={{
                pathname: '/senator-details',
                state: senator
              }}
            >{senator.name}</Link>   {senator.party}
          </div>
          )
        })}
      </div>
    );
  }
}
 
export default Senator;