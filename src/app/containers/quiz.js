import React from 'react';
import { connect } from "react-redux";
import Question from './question';
import Results from './results';
import { goBack } from '../actions/actions';

const Quiz = props => (
  <div className="container" >
    { props.current < props.questions.length
      ? <div><Question
          title={props.questions[props.current].title}
          answers={props.questions[props.current].answers}
          type={props.questions[props.current].type}
        />

        </div>
      : <Results />}
    { (props.current < props.questions.length && props.current > 0) 
      ?         <button onClick={() => props.goBack()}>
                Back
              </button>
      : null}
  </div>
);

const mapStateToProps = state => ({
  questions: state.questions,
  current: state.currentQuestion
});

const mapDispatchToProps = (dispatch) => {
  return {
    goBack() {
      dispatch(goBack());
    },
  };
};

// connect hooks up mapStateToProps and mapDispatchToProps to named component
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
