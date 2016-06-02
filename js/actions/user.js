import { apiUrl } from '../env';
import * as status from './status';
import { fetchUserThreads } from './threads';
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
			if( user.api_token === '' )
			{
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