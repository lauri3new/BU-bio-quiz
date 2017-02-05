// root reducer

import { combineReducers } from 'redux';
import questionsReducer from './questions';
import currentQuestionReducer from './current';
import scoreReducer from './score';
import answersReducer from './answers';

export default combineReducers({
  questions: questionsReducer,
  currentQuestion: currentQuestionReducer,
  score: scoreReducer,
  answers: answersReducer
});
