const initialState = [
  { title: 'whats your fave career1',
    answers: ['doc', 'nurse', 'scientis', 'bro'],
    type: 'binary',
    userAnswer: ''
  },
  { title: 'whats your fave career2',
    answers: ['doc', 'nurse', 'scientis', 'bro'],
    type: 'rating',
    userAnswer: ''
  },
  { title: 'whats your fave career3',
    answers: ['doc', 'nurse', 'scientis', 'bro'],
    type: 'binary',
    userAnswer: ''
  },
  { title: 'whats your fave career4',
    answers: ['doc', 'nurse', 'scientis', 'bro'],
    type: 'rating',
    userAnswer: ''
  },
  { title: 'whats your fave career5',
    answers: ['doc', 'nurse', 'scientis', 'bro'],
    type: 'binary',
    userAnswer: ''
  },
  { title: 'whats your fave career6',
    answers: ['doc', 'nurse', 'scientis', 'bro'],
    type: 'rating',
    userAnswer: ''
  },
];

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return state;
  }
  return state;
};

export default questionsReducer;
