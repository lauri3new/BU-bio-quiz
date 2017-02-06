// root reducer

import { combineReducers } from 'redux';
import questionsReducer from './questions';
import currentQuestionReducer from './current';
import answersReducer from './answers';

export default combineReducers({
  questions: questionsReducer,
  currentQuestion: currentQuestionReducer,
  answers: answersReducer
});
