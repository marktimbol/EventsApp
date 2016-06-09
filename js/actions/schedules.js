import { apiUrl } from '../env';

export const fetchSchedules = () => {
	return (dispatch) => {
		fetch(`${apiUrl}/public/schedules`)
			.then((response) => response.json())
			.then((schedules) => {
				console.log(schedules);
				dispatch(schedulesWasFetched(schedules));
			})
	}
}

export const schedulesWasFetched = (schedules) => {
	return {
		type: 'SCHEDULES_WAS_FETCHED',
		schedules
	}
}