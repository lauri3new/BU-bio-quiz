import React from 'react';

const RatingAnswer = props => (
  <div>
    {props.answers.map((answer) => {
      return (
        <div key={answer}>
          <div>{answer}</div>
          <button> not at all </button>
          <button> bit put off </button>
          <button> enjoy a bit</button>
          <button> like it </button>
          <button> love it </button>
        </div>
      );
    })}
  </div>
);

export default RatingAnswer;
