import React from 'react';

const Question = props => (
  <div>
  <h3>{props.question}</h3>
    {props.answers.map((answer) => {
      return (<div key={answer}> {answer} <button className="btn btn-default"> this</button></div>);
    }
    )}
  </div>
);

export default Question;
