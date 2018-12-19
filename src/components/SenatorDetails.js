import React from 'react';

import './Details.css'

const SenatorDetails = (props) => {
  console.log(props)
  return (
    <div className="details">
      <h1>Name:  {props.location.state.name}</h1>
      <h3>Phone:  {props.location.state.phone}</h3>
      <h3>District:  {props.location.state.district}</h3>
      <h3>Address:  {props.location.state.office}</h3>
      <h3>Website:  <a href={props.location.state.link}>{props.location.state.link}</a></h3>
      <button className="dh-button" onClick={() => {props.history.push('/')}}>Home</button>
    </div>
  );
}
 
export default SenatorDetails;