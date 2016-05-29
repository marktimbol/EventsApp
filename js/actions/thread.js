import { apiUrl } from '../env';

const fetchSingleThread = (threadId, apiToken) => {
	return (dispatch) => {
		const url = `${apiUrl}/user/threads/${threadId}/?api_token=${apiToken}`;
		console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then((thread) => {
				console.log('fetchedSingleThread', thread)
				dispatch(fetchedSingleThread(thread));
			});
	}
}

const fetchedSingleThread = (thread) => {
	return {
		type: 'FETCHED_SINGLE_THREAD',
		thread
	}
}

export {
	fetchSingleThread,
	fetchedSingleThread
}