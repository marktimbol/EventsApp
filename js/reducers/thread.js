const thread = (state=[], action) => {
	switch( action.type )
	{
		case 'FETCHED_SINGLE_THREADS':
			return action.threads;
		default:
			return state;
	}
}

export default threads;