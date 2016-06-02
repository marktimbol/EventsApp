const currentUser = (state=[], action) => {
	switch( action.type )
	{
		case 'USER_WAS_AUTHENTICATED':
			return action.user;
		default:
			return state;
	}
}

export default currentUser;