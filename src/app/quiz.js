import React from 'react';
import Question from './question';

const Quiz = props => (
  <div className="container" >
    <Question question="fave career" answers={['me', 'this', 'doctor']}/>
  </div>
);

export default Quiz;
