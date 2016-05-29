import { apiUrl } from '../env';
import { showLoading } from './loading';
import { Actions } from 'react-native-router-flux';

const authenticateUser = (email, password) => {
	return (dispatch) => {
		dispatch(showLoading());
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
		.then((result) => {
			console.log('authenticateUser', result);

			dispatch(onAuthenticateUser(result));

			if( ! result.authenticated ) {
				return Actions.login({ message: 'Invalid email / password'});
			}
			return Actions.threads();
		})
	}
}

const onAuthenticateUser = (user) => {
	return {
		type: 'AUTHENTICATE_USER',
		user
	}
}

export {
	authenticateUser,
	onAuthenticateUser
}