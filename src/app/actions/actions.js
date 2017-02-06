
export const userAnswer = (answer, question) => {
  return ({
    type: `ANSWER_QUESTION`,
    payload: answer,
    number: question
  });
};

export const goBack = () => {
  return ({
    type: `GO_BACK`
  });
};

export const userSubjects = (subjects) => {
  return ({
    type: `ANSWER_SUBJECTS`,
    payload: subjects
  })
}
