'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
} from 'react-native';

import InputText from './ui/InputText';
import InputEmail from './ui/InputEmail';
import InputPassword from './ui/InputPassword';
import Button from './ui/Button';

class Login extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			email: 'mark@timbol.com',
			password: 'password',
			buttonText: 'Login',
		}

		this.onLogin = this.onLogin.bind(this);
	}

	onLogin()
	{
		console.log(this.state.email);
	}

	render()
	{
		return (
			<View style={styles.container}>
				<View>
					<View style={styles.logo}></View>
				</View>

				<View style={styles.form}>
					<InputEmail 
						label={'E-Mail:'} 
						value={this.state.email} />
					<InputPassword 
						label={'Password:'} 
						value={this.state.password} />						
					<View style={styles.button}>
						<Button label={this.state.buttonText} onPress={this.onLogin} />
					</View>
				</View>	

				<View style={styles.actions}>
					<Text style={styles.link}>Create New Event Account</Text>
					<Text style={styles.link}>Forgot Password?</Text>
				</View>
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
	}
})

module.exports = Login;