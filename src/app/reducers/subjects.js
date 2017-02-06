const subjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ANSWER_SUBJECTS":
      return state = action.payload;
  }
  return state;
};

export default subjectsReducer;
