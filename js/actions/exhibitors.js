import { apiUrl } from '../env';

export const fetchExhibitors = () => {
	return (dispatch) => {
		const url = `${apiUrl}/public/exhibitors`;
		fetch(url)
			.then((response) => response.json())
			.then((exhibitors) => {
				dispatch(exhibitorsWasFetched(exhibitors));
			})
	}
}

export const exhibitorsWasFetched = (exhibitors) => {
	return {
		type: 'EXHIBITORS_WAS_FETCHED',
		exhibitors
	}
}