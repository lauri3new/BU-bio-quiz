import React from 'react';
import { connect } from 'react-redux';
import { userAnswer } from '../actions/actions';

const BinaryAnswer = props => (
  <div className="container">
    {props.answers.map((answerobj) => {
      return (
        <div key={answerobj.answer} className="row">
          <h2>{answerobj.answer}</h2>
          <button
            onClick={() => props.userAnswer({0: answerobj})}
            className="btn btn-default"
          >
             yay or naye
          </button>
        </div>
      );
    })}
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    userAnswer(course) {
      dispatch(userAnswer(course));
    },
  };
};

export default connect(null, mapDispatchToProps)(BinaryAnswer);
