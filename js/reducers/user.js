let initialState = {
	loading: false,
	user: []
}
const currentUser = (state=initialState, action) => {
	switch( action.type )
	{
		case 'AUTHENTICATE_USER':
			return Object.assign({}, state, {
				loading: false,
				user: action.user
			})
		case 'SHOW_LOADING':
			return Object.assign({}, state, {
				loading: true
			})
		default:
			return state;
	}
}

export default currentUser;