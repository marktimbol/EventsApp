import { apiUrl } from '../env';
import * as status from './status';

export const fetchUserThreads = (user) => {
	return (dispatch) => {
		dispatch(status.showLoading())
		const url = `${apiUrl}/user/threads/?api_token=${user.api_token}`;
		fetch(url)
			.then((response) => response.json())
			.then((threads) => {
				dispatch(status.hideLoading());
				dispatch(userThreadsWasFetched(threads));
			})
	}
}

export const userThreadsWasFetched = (threads) => {
	return {
		type: 'USER_THREADS_WAS_FETCHED',
		threads
	}
}

export const setCurrentThread = (thread) => {
	return {
		type: 'SET_CURRENT_THREAD',
		thread
	}
}

export const updateThread = (thread) => {
	return {
		type: 'UPDATE_THREAD',
		thread
	}
}