import { apiUrl } from '../env';

const fetchUserThreads = (user) => {
	return (dispatch) => {
		const url = `${apiUrl}/user/threads/?api_token=${user.api_token}`;
		fetch(url)
			.then((response) => response.json())
			.then((threads) => {
				dispatch(fetchedUserThreads(threads))
			});
	}
}

const fetchedUserThreads = (threads) => {
	return {
		type: 'FETCHED_USER_THREADS',
		threads
	}
}

const getSingleThread = (thread) => {
	return {
		type: 'GET_SINGLE_THREAD',
		thread
	}
}


const replyTo = (otherUser, thread, message, currentUser) => {
	return (dispatch) => {
		const url = `${apiUrl}/threads/${thread.id}/replies`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: currentUser.api_token,
				receiver_id: otherUser,
				message: message
			})
		})
		.then((response) => response.json())
		.then((data) => {
			dispatch(updateThread(data));
			dispatch(fetchUserThreads(currentUser));
		});
	}
}

const updateThread = (message) => {
	return {
		type: 'UPDATE_THREAD',
		message
	}
}

export {
	fetchUserThreads,
	fetchedUserThreads,
	getSingleThread,
	replyTo,
	updateThread,
}