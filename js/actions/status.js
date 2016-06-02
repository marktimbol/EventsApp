export const showLoading = () => {
	return {
		type: 'SHOW_LOADING'
	}
}

export const hideLoading = () => {
	return {
		type: 'HIDE_LOADING'
	}
}

export const authenticating = () => {
	return {
		type: 'AUTHENTICATING'
	}
}

export const invalidCredentials = () => {
	return {
		type: 'INVALID_CREDENTIALS'
	}
}

export const authenticated = () => {
	return {
		type: 'AUTHENTICATED'
	}
}

export const sendingMessage = () => {
	return {
		type: 'SENDING_MESSAGE'
	}
}

export const messageSent = () => {
	return {
		type: 'MESSAGE_SENT'
	}
}

export const haveConversation = () => {
	return {
		type: 'HAVE_CONVERSATION'
	}
}

export const noConversation = () => {
	return {
		type: 'NO_CONVERSATION'
	}
}