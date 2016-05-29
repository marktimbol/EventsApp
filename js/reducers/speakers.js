const speakers = (state = [], action) => {
	switch( action.type )
	{
		case 'SPEAKERS_WAS_FETCHED':
			return action.speakers;
		default: 
			return state;
	}
}

export default speakers;