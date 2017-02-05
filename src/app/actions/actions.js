
export const userAnswer = (answer) => {
  return ({
    type: `ANSWER_QUESTION`,
    payload: answer
  });
};

export const goBack = () => {
  return ({
    type: `GO_BACK`
  });
};
