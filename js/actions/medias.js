import { apiUrl } from '../env';

export const fetchMediaPartners = () => {
	return (dispatch) => {
		const url = `${apiUrl}/public/medias`;
		fetch(url)
			.then((response) => response.json())
			.then((medias) => {
				dispatch(mediasWasFetched(medias));
			})
	}
}

export const mediasWasFetched = (medias) => {
	return {
		type: 'MEDIA_PARTNERS_WAS_FETCHED',
		medias
	}
}