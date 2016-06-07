import { combineReducers } from 'redux';
import user from './user';
import threads from './threads';
import thread from './thread';
import schedules from './schedules';
import speakers from './speakers';
import exhibitors from './exhibitors';
import medias from './medias';
import is from './is';

const rootReducer = combineReducers({
	user,
	threads,
	thread,
	schedules,
	speakers,
	exhibitors,
	medias,
	is,
});

export default rootReducer;