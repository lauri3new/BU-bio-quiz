import React from 'react';
import { Link } from 'react-router';
import Styles from './department.css';

const Department = props => (
  <div className={`container ${Styles.container}`}>
    <h1>{props.subject}</h1>
    <h3>{props.description}</h3>
    {props.internal === true
      ? <Link to={props.link}><button className="btn btn-default"> CHOOSE ME</button></Link>
      : <a href={props.link} target="_blank"><button className="btn btn-default"> CHOOSE ME</button></a>}
  </div>
);

export default Department;
