import React from 'react';

const BinaryAnswer = props => (
  <div>
    {props.answers.map((answer) => {
      return (
        <div key={answer}><div>{answer}</div><button> yay or naye </button></div>
      );
    })}
  </div>
);

export default BinaryAnswer;
