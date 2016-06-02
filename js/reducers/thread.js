let initialState = {
	messages: []
}

const thread = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_CURRENT_THREAD':
			return action.thread;
		case 'UPDATE_THREAD':		
			return Object.assign({}, state, {
				...state,
				messages: [
					...state.messages,
					{
						thread_id: action.thread.thread_id,
						sender_id: action.thread.sender_id,
						message: action.thread.message
					}
				]
			})
		
		default:
			return state;
	}
}

export default thread;