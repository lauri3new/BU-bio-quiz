const initialState = [
  { title: 'whats your fave career?',
    answers: [
      {
        answer: 'doc',
        course: 'BIOMED'
      },
      // {
      //   answer: 'scientist',
      //   course: 'BIOCHEM'
      // },
      // {
      //   answer: 'brain surgeon',
      //   course: 'NEURO'
      // },
      // {
      //   answer: 'pharmacist',
      //   course: 'CMM'
      // },
      // {
      //   answer: 'drug dispenser',
      //   course: 'PHARMA'
      // },
      {
        answer: 'footbal trainer',
        course: 'PHYSIO'
      }],
    type: 'rating'
  },
  { title: 'How do you rate your interest in these things?',
    answers: [
      {
        answer: 'learning more about biomedical things',
        course: 'BIOMED'
      },
      {
        answer: 'modelling humans in animal models',
        course: 'BIOCHEM'
      },
      {
        answer: 'understanding conciousness',
        course: 'NEURO'
      },
    ],
    type: 'rating'
  },
  { title: 'How do you rate your interest in these things?',
    answers: [
      {
        answer: 'Interacting with people and ensuring treatments are given to right people',
        course: 'PHARMA'
      },
      {
        answer: 'the human body',
        course: 'PHYSIO'
      }],
    type: 'rating'
  },
  // { title: 'whats your fave career1',
  //   answers: [
  //     {
  //       answer: 'doc',
  //       course: 'BIOMED'
  //     },
  //     {
  //       answer: 'scientist',
  //       course: 'BIOCHEM'
  //     },
  //     {
  //       answer: 'brain surgeon',
  //       course: 'NEURO'
  //     },
  //     {
  //       answer: 'pharmacist',
  //       course: 'CMM'
  //     },
  //     {
  //       answer: 'drug dispenser',
  //       course: 'PHARMA'
  //     },
  //     {
  //       answer: 'footbal trainer',
  //       course: 'PHYSIO'
  //     }],
  //   type: 'binary'
  // },
  // { title: 'whats your fave career1',
  //   answers: [
  //     {
  //       answer: 'doc',
  //       course: 'BIOMED'
  //     },
  //     {
  //       answer: 'scientist',
  //       course: 'BIOCHEM'
  //     },
  //     {
  //       answer: 'brain surgeon',
  //       course: 'NEURO'
  //     },
  //     {
  //       answer: 'pharmacist',
  //       course: 'CMM'
  //     },
  //     {
  //       answer: 'drug dispenser',
  //       course: 'PHARMA'
  //     },
  //     {
  //       answer: 'footbal trainer',
  //       course: 'PHYSIO'
  //     }],
  //   type: 'rating'
  // },
];

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return state;
  }
  return state;
};

export default questionsReducer;
