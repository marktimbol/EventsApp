const threads = (state=[], action) => {
	switch( action.type )
	{
		case 'USER_THREADS_WAS_FETCHED':
			return action.threads;
		default:
			return state;
	}
}

export default threads;