const threads = (state=[], action) => {
	switch( action.type )
	{
		case 'FETCHED_USER_THREADS':
			return action.threads;
		default:
			return state;
	}
}

export default threads;