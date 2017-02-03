import React from 'react';
import Styles from './department.css';

const Department = props => (
  <div className={`container ${Styles.container}`}>
    <h1>{props.subject}</h1>
    <h3>{props.description}</h3>
    <a href={props.link}><button className="btn btn-default"> CHOOSE ME</button></a>
  </div>
);

export default Department;
