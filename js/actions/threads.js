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
			});
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


export const replyTo = (otherUserId, thread, message, currentUser) => {
	return (dispatch) => {
		dispatch(status.sendingMessage());
		const url = `${apiUrl}/threads/${thread.id}/replies`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: currentUser.api_token,
				receiver_id: otherUserId,
				message: message
			})
		})
		.then((response) => response.json())
		.then((data) => {
			console.log('replyTo response', data);
			dispatch(status.messageSent());
			dispatch(updateThread(data));
			dispatch(fetchUserThreads(currentUser));
		});
	}
}

export const startThread = (currentUser, otherUserId, message) => {
	return (dispatch) => {
		dispatch(status.sendingMessage());
		const url = `${apiUrl}/threads`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: currentUser.api_token,
				receiver_id: otherUserId,
				message: message
			})
		})
		.then((response) => response.json())
		.then((thread) => {
			console.log('startThread response', thread);
			dispatch(updateThread(thread));
			dispatch(status.messageSent());
			dispatch(fetchUserThreads(currentUser));
			dispatch(status.haveConversation());
		});
	}
}

export const updateThread = (thread) => {
	return {
		type: 'UPDATE_THREAD',
		thread
	}
}

export const checkIfTheyHaveConversation = (currentUserId, otherUserId) => {
	return (dispatch) => {
		const url = `${apiUrl}/public/haveConversation/${currentUserId}/${otherUserId}`;
		fetch(url)	
			.then((response) => response.json())
			.then((result) => {
				if( result.haveConversation ) {
					dispatch(status.haveConversation());
					dispatch(setCurrentThread(result.thread));
				} else {
					dispatch(status.noConversation());
				}
			})
	}
}

export const haveConversation = () => {
	return (dispatch) => {
		dispatch(status.haveConversation());
	}
}

export const noConversation = () => {
	let initialState = {
		messages: []
	}
	return (dispatch) => {
		dispatch(status.noConversation());
		dispatch(setCurrentThread(initialState));
	}
}