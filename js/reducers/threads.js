const threads = (state=[], action) => {
	switch( action.type )
	{
		case 'FETCHED_USER_THREADS':
			return action.threads;
		case 'UPDATE_MESSAGES':			
			return state.map((thread, index) => {
				if( thread.id !== action.message.thread_id ) {
					return thread;
				}

				return Object.assign({}, thread, {
					messages: [
						...thread.messages,
						{						
							thread_id: action.message.thread_id,
							sender_id: action.message.sender_id,
							message: action.message.message	
						}
					]
				})
			});
		default:
			return state;
	}
}

export default threads;