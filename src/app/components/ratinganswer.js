import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { userAnswer, goBack } from '../actions/actions';
import Styles from './ratinganswer.css';

class RatingAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: {},
      attempted: false
    }
  }

  componentDidMount() {
    console.log(this.props.currentQuestion);
    if (this.props.storedAnswers[this.props.currentQuestion])
      {
        this.setState({
          radio: this.props.storedAnswers[this.props.currentQuestion],
          attempted: false
        });
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.storedAnswers[nextProps.currentQuestion] !== undefined)
      {
        this.setState({
          radio: nextProps.storedAnswers[nextProps.currentQuestion],
          attempted: false
        });
      }
    else {
      this.setState({
        radio: {},
        attempted: false
      });
    }
  }

  render() {
    return (
  <div >

    <ReactCSSTransitionGroup
      transitionName={Styles}
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      <div key={this.props.currentQuestion} style={{ position: "absolute" }}>
      {this.state.attempted === true ? <div className="alert alert-warning" style={{ marginTop: '20px'}} >Please answer <strong>all</strong> questions</div> : null}
              <h1 key={this.props.title}>{this.props.title}</h1>
    {this.props.answers.map((answerobj, i) => {
      return (
        <div key={answerobj.answer + 0} className="container" >
        <div className="row">
          <h2>{answerobj.answer}</h2>
        </div>
        <div className="row">
          <div className="checkbox col-sm-4">
            <input
              type="radio"
              onClick={() => this.handleClick(answerobj, i, 1)}
              name={answerobj.answer}
              defaultChecked={this.props.storedAnswers[this.props.currentQuestion] && (this.props.storedAnswers[this.props.currentQuestion][`${i}`].rating === 1) ? true : false}
            />
            <label><h4> not at all </h4></label>
          </div>
          <div className="checkbox col-sm-4">

            <input
              type="radio"
              onClick={() => this.handleClick(answerobj, i, 2)}
              name={answerobj.answer}
              defaultChecked={this.props.storedAnswers[this.props.currentQuestion] && (this.props.storedAnswers[this.props.currentQuestion][`${i}`].rating === 2) ? true : false}
            />
            <label><h4> average </h4></label>
          </div>
          <div className="checkbox col-sm-4">

            <input
              type="radio"
              onClick={() => this.handleClick(answerobj, i, 3)}
              name={answerobj.answer}
              defaultChecked={this.props.storedAnswers[this.props.currentQuestion] && (this.props.storedAnswers[this.props.currentQuestion][`${i}`].rating === 3) ? true : false}
            />
            <label><h4> great </h4></label>
          </div>
        </div>
        </div>
      );
    }
  )}
  <div className="row">
    <div className="col-sm-5"></div>
    <div className="col-sm-1">
      { this.props.currentQuestion > 0 ?  <button className="btn btn-primary" onClick={() => this.props.goBack()}>Back</button> : null}
    </div>
    <div className="col-sm-1">
  <button
    onClick={() => this.handleSubmit()}
    className="btn btn-primary"
  >
    Next
  </button>
</div>

  </div>
          </div>

  </ReactCSSTransitionGroup>

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
  if (Object.keys(this.state.radio).length === this.props.answers.length)
    {
      this.props.userAnswer(this.state.radio, this.props.currentQuestion);
    }
  else { this.setState({
          ...this.state,
          attempted: true
        });
  }
}

};

const mapDispatchToProps = (dispatch) => {
  return {
    userAnswer(answer, question) {
      dispatch(userAnswer(answer, question));
    },
    goBack() {
      dispatch(goBack());
    },
  };
};

const mapStateToProps = state => ({
  storedAnswers: state.answers,
  currentQuestion: state.currentQuestion
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingAnswer);
