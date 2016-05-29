import { combineReducers } from 'redux';
import user from './user';
import threads from './threads';
import schedules from './schedules';
import speakers from './speakers';

const rootReducer = combineReducers({
	user,
	threads,
	schedules,
	speakers,
});

export default rootReducer;