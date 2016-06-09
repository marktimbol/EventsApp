import { apiUrl } from '../env';

const fetchSpeakers = () => {
	return (dispatch) => {
		fetch(`${apiUrl}/public/speakers`)
			.then((response) => response.json())
			.then((speakers) => {
				dispatch(speakersWasFetched(speakers));
			})
	}
}

const speakersWasFetched = (speakers) => {
	return {
		type: 'SPEAKERS_WAS_FETCHED',
		speakers
	}
}


export {
	fetchSpeakers,
	speakersWasFetched
}

