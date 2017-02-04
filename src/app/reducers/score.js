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
        Biomed: state.Biomed + 1,
        ...state
      };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_BIOCHEM":
    return state = {
      Biochem: state.Biochem + 1,
      ...state
    };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_CMM":
    return state = {
      CMM: state.CMM + 1,
      ...state
    };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_NEURO":
    return state = {
      Neuro: state.Neuro + 1,
      ...state
    };
  }
  switch (action.type) {
    case "ANSWER_QUESTION_PHARMA":
    return state = {
      Pharma: state.Pharma + 1,
      ...state
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
