import { apiUrl } from '../env';
import * as status from './status';
import { fetchUserThreads, updateThread, setCurrentThread } from './threads';
import { Actions } from 'react-native-router-flux';

export const authenticateUser = (email, password) => {
	return (dispatch) => {
		dispatch(status.authenticating());
		fetch(`${apiUrl}/public/login`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email, password
			})
		})
		.then((response) => response.json())
		.then((user) => {
			if( user.api_token === '' ) {
				dispatch(status.invalidCredentials());
				return Actions.login({ message: 'Invalid email / password'});	
			}
			dispatch(status.authenticated());
			dispatch(userWasAuthenticated(user));
			dispatch(fetchUserThreads(user));

			return Actions.home();			
		})
	}
}

export const userWasAuthenticated = (user) => {
	return {
		type: 'USER_WAS_AUTHENTICATED',
		user
	}
}

export const startThread = (currentUser, otherUserId, message) => {
	return (dispatch) => {
		dispatch(status.sendingMessage());
		const url = `${apiUrl}/threads`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: currentUser.api_token,
				receiver_id: otherUserId,
				message: message
			})
		})
		.then((response) => response.json())
		.then((thread) => {
			dispatch(updateThread(thread));
			dispatch(status.messageSent());
			dispatch(fetchUserThreads(currentUser));
			dispatch(status.haveConversation());
		});
	}
}

export const replyTo = (otherUserId, thread, message, currentUser) => {
	return (dispatch) => {
		dispatch(status.sendingMessage());
		const url = `${apiUrl}/threads/${thread.id}/replies`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: currentUser.api_token,
				receiver_id: otherUserId,
				message: message
			})
		})
		.then((response) => response.json())
		.then((data) => {
			dispatch(status.messageSent());
			dispatch(updateThread(data));
			// dispatch(fetchUserThreads(currentUser));
		});
	}
}


export const checkIfTheyHaveConversation = (currentUser, otherUserId) => {
	return (dispatch) => {
		const url = `${apiUrl}/haveConversation/${currentUser.id}/${otherUserId}?api_token=${currentUser.api_token}`;
		fetch(url)	
			.then((response) => response.json())
			.then((result) => {
				if( result.haveConversation ) {
					dispatch(status.haveConversation());
					dispatch(setCurrentThread(result.thread));
				} else {
					dispatch(status.noConversation());
				}
			})
	}
}

export const haveConversation = () => {
	return (dispatch) => {
		dispatch(status.haveConversation());
	}
}

export const noConversation = () => {
	let initialState = {
		messages: []
	}
	return (dispatch) => {
		dispatch(status.noConversation());
		dispatch(setCurrentThread(initialState));
	}
}