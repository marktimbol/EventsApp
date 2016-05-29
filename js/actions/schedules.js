const domain = 'http://mecsc.dev';

const fetchSchedules = () => {
	return (dispatch) => {
		fetch(`${domain}/api/public/schedules`)
			.then((response) => response.json())
			.then((responseData) => {
				dispatch(schedulesWasFetched(responseData));
			})
	}
}

const schedulesWasFetched = (schedules) => {
	return {
		type: 'SCHEDULES_WAS_FETCHED',
		schedules
	}
}

export {
	fetchSchedules,
	schedulesWasFetched,
}
