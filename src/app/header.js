import React from 'react';
import Styles from './header.css';

const Header = props => (
  <div className={`row ${Styles.header}`}>
    <div className={`col-sm-12 ${Styles.title}`} >
      <h1>Bristol University Quiz</h1>
    </div>
  </div>
)

export default Header;
