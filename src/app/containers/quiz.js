import React from 'react';
import { connect } from "react-redux";
import Question from './question';
import { userAnswer } from '../actions/actions';

const Quiz = props => (
  <div className="container" >
    <button onClick={() => props.userAnswer()}>click me</button>
    { props.current < props.questions.length
      ? <Question
          title={props.questions[props.current].title}
          answers={props.questions[props.current].answers}
          type={props.questions[props.current].type}
        />
      : <div>the end!</div> }
  </div>
);

const mapStateToProps = state => ({
  questions: state.questions,
  current: state.currentQuestion
});

// mapDispatchToProps maps functions (action creators) that use dispatch methods
// to this.props so that they will be availble also from this.props locally
const mapDispatchToProps = (dispatch) => {
  return {
    userAnswer() {
      dispatch(userAnswer());
    },
  };
};

// connect hooks up mapStateToProps and mapDispatchToProps to named component
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
