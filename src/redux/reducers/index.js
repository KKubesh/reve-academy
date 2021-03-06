import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import home_AllProgramPageReducer from './home_AllProgramsReducer';
import manageAccountsReducer from './manageAccountsReducer';
import studentListReducer from './studentListReducer';
import scheduleReducer from './scheduleReducer';
import instructorFeedBackReducer from './instructorFeedBackReducer';
import studentCommentReducer from './studentCommentReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import studentWeekInfoReducer from './studentWeekInfoReducer';
import studentLikeReducer from './studentLikeReducer';
import studentProgramReducer from './studentProgramReducer';

const store = combineReducers({
  user,
  login,
  home_AllProgramPageReducer,
  manageAccountsReducer,
  studentListReducer,
  scheduleReducer,
  instructorFeedBackReducer,
  forgotPasswordReducer,
  studentCommentReducer,
  studentWeekInfoReducer,
  studentLikeReducer,
  studentProgramReducer
});

export default store;

  
