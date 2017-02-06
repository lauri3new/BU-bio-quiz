const answersReducer = (state = [], action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      let x = {};
      x[action.number] = action.payload;
      return state = Object.assign([], state, x);
  }
  switch (action.type) {
    case "GO_BACK":
      return state;
  }
  return state;
};

export default answersReducer;
