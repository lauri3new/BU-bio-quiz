import React from 'react';
import BinaryAnswer from '../components/binaryanswer';
import RatingAnswer from '../components/ratinganswer';

const Question = (props) => {
    const answer = () => {
      if (props.type === 'binary') {
        return (<BinaryAnswer answers={props.answers} />)
      }
      if (props.type == 'rating') {
        return (<RatingAnswer answers={props.answers} />)
      }
    };
  return (
  <div>
    <h1>{props.title}</h1>
    {answer()}
  </div>
)
};

export default Question;
