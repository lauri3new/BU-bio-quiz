import React from 'react';
import { connect } from 'react-redux';
import { userAnswer } from '../actions/actions';

class RatingAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: {},
      attempted: false
    }
  }

  render() {
    return (
  <div>
    {this.state.attempted === true ? <div>hello try again</div> : null}
    {this.props.answers.map((answerobj, i) => {
      return (
        <div className="container">
        <div key={answerobj.answer + i} className="row">
          <h2>{answerobj.answer}</h2>
        </div>
        <div className="row">
          <div key="ok" className="checkbox col-sm-4">
            <input
              type="radio"
              onClick={() => this.handleClick(answerobj, i, 1)}
              name={answerobj.answer}
            />
            <label><h4> not at all </h4></label>
          </div>
          <div key="nok" className="checkbox col-sm-4">
            <input
              type="radio"
              onClick={() => this.handleClick(answerobj, i, 2)}
              name={answerobj.answer}
            />
            <label><h4> average </h4></label>
          </div>
          <div key="nope"  className="checkbox col-sm-4">
            <input
              type="radio"
              onClick={() => this.handleClick(answerobj, i, 3)}
              name={answerobj.answer}
            />
            <label><h4> great </h4></label>
          </div>
        </div>
        </div>
      );
    })}

  <button
    onClick={() => this.handleSubmit()}
    className="btn btn-primary"
  >
    SUBMIT ANSWERS
  </button>
  </div>
);}

handleClick(answer, key, rating) {
  this.setState({
          ...this.state,
              radio: {
              ...this.state.radio,
      [`${key}`]: {
        answer: answer.answer,
        course: answer.course,
        rating: rating
        }
      }
  });
}

handleSubmit() {
  console.log(Object.keys(this.state.radio).length);
  console.log(this.state, this.props.answers.length);
  if (Object.keys(this.state.radio).length === this.props.answers.length)
    {
      this.props.userAnswer(this.state.radio);
    }
  else { this.setState({
          ...this.state,
    attempted: true
  });
  console.log('helo');
  }
}

};

const mapDispatchToProps = (dispatch) => {
  return {
    userAnswer(course) {
      dispatch(userAnswer(course));
    },
  };
};

export default connect(null, mapDispatchToProps)(RatingAnswer);
