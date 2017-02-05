import React from 'react';
import { connect } from "react-redux";

const Results = props => {
  let biomed = 0;
  let biochem = 0;
  let neuro = 0;
  let cmm = 0;
  let pharma = 0;
  let physio = 0;
  let biomedE = '';
  let biochemE = '';
  let neuroE = '';
  let cmmE = '';
  let pharmaE = '';
  let physioE = '';
  props.answers.map((ansobjs,i) => {
    console.log(ansobjs);
    for (let key in ansobjs)
      {
        if (ansobjs[key].course == 'BIOMED')
        {
          biomed += (ansobjs[key].rating || 1);
          biomedE += (ansobjs[key].answer) + ' ';
        }
        if (ansobjs[key].course == 'BIOCHEM')
        {
          biochem += (ansobjs[key].rating || 1);
          biochemE += (ansobjs[key].answer) + ' ';
        }
        if (ansobjs[key].course == 'CMM')
        {
          cmm += (ansobjs[key].rating || 1);
          cmmE += (ansobjs[key].answer) + ' ';
        }
        if (ansobjs[key].course == 'NEURO')
        {
          neuro += (ansobjs[key].rating || 1);
          neuroE += (ansobjs[key].answer) + ' ';
        }
        if (ansobjs[key].course == 'PHARMA')
        {
          pharma += (ansobjs[key].rating || 1);
          pharmaE += (ansobjs[key].answer) + ' ';
        }
        if (ansobjs[key].course == 'PHYSIO')
        {
          physio += (ansobjs[key].rating || 1);
          physioE += (ansobjs[key].answer) + ' ';
        }
      }
  });
  let subjects = [
    {course:'BIOMED', rating: biomed, evidence:biomedE},
    {course:'BIOCHEM', rating: biochem, evidence:biochemE},
    {course:'CMM', rating: cmm, evidence:cmmE},
    {course:'NEURO', rating: neuro, evidence:neuroE },
    {course:'PHARMA', rating: pharma, evidence:pharmaE },
    {course:'PHYSIO', rating: physio, evidence:physioE },
  ];
  const sortedSubjects = subjects.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0) );
  console.log(sortedSubjects);
  return (
    <div className="container">
      <div className="row">
        <h1>Your top course is {sortedSubjects[0].course}</h1>
        <h2>Course info</h2>
        <h4>based on your interest in: {sortedSubjects[0].evidence}</h4>
      </div>
      <div>
        you may also be interested in:
      </div>
    { sortedSubjects.slice(1,4).map((obj, i) => {
      return (
        <div className="container" key={i}>
          <h2>{obj.course}</h2>
          <h5>{obj.evidence}</h5>
        </div>
      )
    }
    )}
  </div>
  )
};

const mapStateToProps = state => ({
  answers: state.answers
});

// connect hooks up mapStateToProps and mapDispatchToProps to named component
export default connect(mapStateToProps)(Results);
