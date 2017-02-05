const answersReducer = (state = [], action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return [...state, action.payload];
  }
  switch (action.type) {
    case "GO_BACK":
      return state = state.slice(0, -1);
  }
  return state;
};

export default answersReducer;
