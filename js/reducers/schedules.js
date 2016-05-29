const schedules = (state = [], action) => {
	switch(action.type)
	{
		case 'SCHEDULES_WAS_FETCHED':
			return action.schedules;
		default:
			return state;
	}
}

export default schedules;