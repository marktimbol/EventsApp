
const exhibitors = (state = [], action) => {
	switch(action.type)
	{
		case 'EXHIBITORS_WAS_FETCHED':
			return action.exhibitors;
		default:
			return state;
	}
}

export default exhibitors;