const thread = (state = [], action) => {
	switch(action.type) {
		case 'GET_SINGLE_THREAD':
			return action.thread;
		case 'UPDATE_THREAD':		
			return Object.assign({}, state, {
				...state,
				messages: [
					...state.messages,
					{
						thread_id: action.message.thread_id,
						sender_id: action.message.sender_id,
						message: action.message.message
					}
				]
			})
		
		default:
			return state;
	}
}

export default thread;