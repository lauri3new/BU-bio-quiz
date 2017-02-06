import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { userSubjects } from '../actions/actions';


class RatingAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: false,
      subjects: {
        Biology: false,
        Chemistry: false,
        Mathematics: false,
        HumanBiology: false,
        Physics: false
      },
    }
  }

  handleClick(subject) {

    this.setState({
      ...this.state,
      subjects: {
        ...this.state.subjects,
        [`${subject}`]: this.state.subjects[`${subject}`] ? false : true
      }
    })
    setTimeout(() => console.log(this.state), 500);
  }

  handleSubmit() {
    if (Object.values(this.state.subjects).filter(a => a).length >= 2) {
    this.props.userSubjects(this.state.subjects);
    this.props.router.push('quiz');
  }     else {
        this.setState({
          ...this.state,
          warning: true
        })
      }
  }

  render() {
    return (
      <div className="container">
        {this.state.warning ? <div>warning dr robinson</div> : null}
        <h1>Which subjects are you taking</h1>
        <div className="row">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                onClick={() => {this.handleClick('Biology')}}
              /> A level <strong>Biology</strong> or equivilant Level 3 HTQ
              </label>
            </div>
          </div>
          <div className="row">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  onClick={() => {this.handleClick('Chemistry')}}
                /> A level <strong>Chemistry</strong> or equivilant Level 3 HTQ
                </label>
              </div>
            </div>
            <div className="row">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onClick={() => {this.handleClick('HumanBiology')}}
                  /> A level <strong>Human Biology</strong> or equivilant Level 3 HTQ
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => {this.handleClick('Mathematics')}}
                    /> A level <strong>Mathematics</strong> or equivilant Level 3 HTQ
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        onClick={() => {this.handleClick('Physics')}}
                      /> A level <strong>Physics</strong> or equivilant Level 3 HTQ
                      </label>
                    </div>
                  </div>
        <div className="row">
          <button
            className="btn btn-primary"
          onClick={() => {
            this.handleSubmit()
            }}>
            SUBMIT
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSubjects(subjects) {
      dispatch(userSubjects(subjects));
    },
  };
};
export default connect(null, mapDispatchToProps)(RatingAnswer);
