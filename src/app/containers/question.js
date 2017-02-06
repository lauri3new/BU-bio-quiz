import React from 'react';
import BinaryAnswer from '../components/binaryanswer';
import RatingAnswer from '../components/ratinganswer';

const Question = (props) => {
    const answer = () => {
      if (props.type === 'binary') {
        return (<BinaryAnswer answers={props.answers} title={props.title} />)
      }
      if (props.type == 'rating') {
        return (<RatingAnswer answers={props.answers} title={props.title} />)
      }
    };
  return (
  <div>
    {answer()}
  </div>
)
};

export default Question;
