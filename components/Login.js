'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	Image,
	ActivityIndicatorIOS,
	StyleSheet,
} from 'react-native';

import User from './User';
import InputText from './ui/InputText';
import InputEmail from './ui/InputEmail';
import InputPassword from './ui/InputPassword';
import Button from './ui/Button';

const domain = 'http://mecsc.dev';

class Login extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			email: 'mark@timbol.com',
			password: 'marktimbol',
			buttonText: 'Login',
			disabledButton: false,
			formWasSubmitted: false,
			message: '',
		}

		this.submitForm = this.submitForm.bind(this);
		this.login = this.login.bind(this);
	}

	submitForm(e)
	{
		e.preventDefault();

		this.setState({
			// buttonText: 'Logging in...',
			// disabledButton: true,
			message: '',
			formWasSubmitted: true,
		});

		this.login();
	}

	login()
	{
		const loginUrl = `${domain}/api/public/login`;
		
		fetch(loginUrl, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then((response) => response.json())
		.then((responseText) => {
			console.log(responseText.user.api_token);
			this.checkApiToken(responseText.user);
		})
		.catch((error) => {
			console.warn(error);
		})
		.done();
	}

	checkApiToken(user)
	{
		if( user.api_token === '' )
		{
			this.setState({
				disabledButton: false,
				buttonText: 'Login',
				message: 'Invalid Email / Password'
			});
		}

		else
		{
			this.setState({
				buttonText: 'Login',
				disabledButton: false,
			});

			this.props.navigator.push({
				title: 'Profile',
				component: User,
				passProps: { user }
			});
		}	
	}

	render()
	{
		return (
			<View style={styles.container}>
				<View>
					<Image source={require('../images/logo.png')} style={styles.logo} />
				</View>

				{ this.state.formWasSubmitted ?
					<View style={styles.loading}>
						<ActivityIndicatorIOS animating={true} size={'large'} color={'white'} />
					</View> :

					<View>
						<View style={styles.form}>
							<InputEmail 
								label={'E-Mail:'} 
								value={this.state.email} />
							<InputPassword 
								label={'Password:'} 
								value={this.state.password} />						
							<View style={styles.button}>
								<Button 
									label={this.state.buttonText} 
									disabledButton={this.state.disabledButton}
									onPress={this.submitForm} />
								<Text style={styles.message}>{ this.state.message }</Text>
							</View>
						</View>	

						<View style={styles.actions}>
							<Text style={styles.link}>Create New Event Account</Text>
							<Text style={styles.link}>Forgot Password?</Text>
						</View>
					</View>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d32f2f',
	},

	logo: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'white'
	},

	loading: {
		marginTop: 50,
	},

	form: {
		marginTop: 30,
	},

	button: {
		marginTop: 20,
	},

	actions: {
		flex: 1,
		marginTop: 100,
	},

	link: {
		color: 'white',
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 15,
	},

	message: {
		color: 'white',
		fontSize: 12,
		textAlign: 'center',
		marginTop: 10,	
	}
})

module.exports = Login;