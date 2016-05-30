import { combineReducers } from 'redux';
import user from './user';
import threads from './threads';
import thread from './thread';
import schedules from './schedules';
import speakers from './speakers';

const rootReducer = combineReducers({
	user,
	threads,
	thread,
	schedules,
	speakers,
});

export default rootReducer;