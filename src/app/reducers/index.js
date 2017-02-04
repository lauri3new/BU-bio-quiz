// root reducer

import { combineReducers } from 'redux';
import questionsReducer from './questions';
import currentQuestionReducer from './current';

export default combineReducers({
  questions: questionsReducer,
  currentQuestion: currentQuestionReducer
});
