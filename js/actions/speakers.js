const domain = 'http://mecsc.dev';

const fetchSpeakers = () => {
	return (dispatch) => {
		fetch(`${domain}/api/public/speakers`)
			.then((response) => response.json())
			.then((speakers) => {
				dispatch(speakersWasFetched(speakers));
			});
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

