let initialState = {
	authenticated: false,
	authenticating: false,
	hasConversation: false,
	loading: false,
	sending: false
}

const is = (state=initialState, action) => {
	switch( action.type )
	{
		case 'SHOW_LOADING':
			return {
				...state,
				loading: true
			}
		case 'HIDE_LOADING'	:
			return {
				...state,
				loading: false
			}
		case 'AUTHENTICATING':
			return {
				...state,
				authenticating: true
			}
		case 'INVALID_CREDENTIALS':
			return {
				...state,
				authenticating: false,
				authenticated: false
			}
		case 'AUTHENTICATED':
			return {
				...state,
				authenticated: true,
				authenticating: false
			}
		case 'SENDING_MESSAGE':
			return {
				...state,
				sending: true
			}
		case 'MESSAGE_SENT':
			return {
				...state,
				sending: false
			}
		case 'HAVE_CONVERSATION':
			return {
				...state,
				hasConversation: true
			}
		case 'NO_CONVERSATION':
			return {
				...state,
				hasConversation: false
			}
		default:
			return state;
	}
}

export default is;