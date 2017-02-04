
export const userAnswer = (answer) => {
  return ({
    type: "ANSWER_QUESTION",
    payload: answer
  });
};
