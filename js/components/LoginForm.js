import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

import Button from './ui/Button';

class LoginForm extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			email: '',
			password: '',
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	render()
	{
		return (
			<View style={styles.form}>
				<View style={styles.input}>
					<Text style={styles.label}>E-Mail</Text>
					<TextInput 
						keyboardType={'email-address'}
						autoCorrect={false}
						autoCapitalize={'none'}
						defaultValue={this.state.email}
						onChangeText ={(text) => this.setState({ email: text }) }
						style={styles.text} />
				</View>

				<View style={styles.input}>
					<Text style={styles.label}>Password</Text>
					<TextInput 
						secureTextEntry={true}
						autoCorrect={false}
						autoCapitalize={'none'}
						defaultValue={this.state.password}
						onChangeText={(text) => this.setState({ password: text })}
						style={styles.text} />
				</View>

				<View style={styles.button}>
					<Button 
						label={'Login'} 
						onPress={this.onSubmit} />
				</View>
			</View>	
		)
	}

	onSubmit(e)
	{
		e.preventDefault();

		let { email, password } = this.state;
		this.props.onSubmit(email, password);
	}
}

const styles = StyleSheet.create({
	form: {
		marginTop: 30,
	},

	input: {
		marginTop: 5,
		marginBottom: 5,
	},

	label: {
		color: 'white',
		marginBottom: 5,
	},

	text: {
		width: 200,
		height: 30,
		padding: 5,
		color: 'white',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 2,
	},

	button: {
		marginTop: 20,
	}
});

export default LoginForm;