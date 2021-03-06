'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TextInput,
	ScrollView,
} from 'react-native';

import Button from './ui/Button';
import { themeColor } from '../env';

class ChatForm extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			message: '',
			buttonState: false
		}
	}

	onSubmit(e)
	{
		e.preventDefault();

		let message = this.state.message;

		this.setState({
			message: '',
			buttonState: false
		});

		this.props.onStartThread(message);
	}

	handleChangeText(message) 
	{
		this.setState({ message })
		this.state.message === '' ? 
			this.setState({ buttonState: false }) : 
			this.setState({ buttonState: true });
	}

	render()
	{		
		return (
			<View style={styles.form}>
				<View style={styles.input}>
					<ScrollView 
						keyboardDismissMode={'none'}
						style={styles.scrollView}>
						<TextInput 
							autoCorrect={false}
							autoCapitalize={'none'}
							multiline={true}
							value={this.state.message}
							onChangeText={this.handleChangeText.bind(this) }
							style={styles.textarea} />
					</ScrollView>
				</View>
				<View style={styles.buttonContainer}>
					<Button 
						label={'Send'} 
						onPress={this.onSubmit.bind(this)} 
						customBg={themeColor} 
						enabled={this.state.buttonState} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},

	form: {
		flex: 1,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},

	input: {
		flex: 0.8,
	},

	textarea: {
		height: 40,
		padding: 5,
		color: '#333',
		borderWidth: 1,
		borderRadius: 2,
		marginRight: 10,
		borderColor: '#ddd',
	},

	buttonContainer: {
		flex: 0.2,
		marginRight: 5,
	},
});

module.exports = ChatForm;