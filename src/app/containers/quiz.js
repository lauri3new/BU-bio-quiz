import React from 'react';
import { connect } from "react-redux";
import Question from './question';
import Results from './results';

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
  </div>
);

const mapStateToProps = state => ({
  questions: state.questions,
  current: state.currentQuestion
});

// connect hooks up mapStateToProps and mapDispatchToProps to named component
export default connect(mapStateToProps)(Quiz);
