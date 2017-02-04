const currentQuestionReducer = (state = 0, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return state = state + 1;
  }
  return state;
};

export default currentQuestionReducer;
