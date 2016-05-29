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

export {
	fetchUserThreads,
	fetchedUserThreads
}