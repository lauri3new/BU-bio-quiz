const initialState = {
  Biomed: 0,
  Biochem: 0,
  CMM: 0,
  Neuro: 0,
  Pharma: 0,
  Physio: 0
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION_BIOMED":
      return state = {
        ...state,
        Biomed: state.Biomed + 1,
      };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_BIOCHEM":
      return state = {
        ...state,
        Biochem: state.Biochem + 1,
      };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_CMM":
      return state = {
        ...state,
        CMM: state.CMM + 1,
      };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_NEURO":
      return state = {
        ...state,
        Neuro: state.Neuro + 1,
      };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_PHARMA":
      return state = {
        ...state,
        Pharma: state.Pharma + 1,
      };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_PHYSIO":
      return state = {
        Physio: state.Physio + 1,
        ...state
      };
  }
  return state;
};

export default scoreReducer;
