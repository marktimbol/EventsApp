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

class ChatForm extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			message: '',
		}
	}

	onSubmit(e)
	{
		e.preventDefault();

		let message = this.state.message;
		this.setState({
			message: ''
		});
		this.props.onStartThread(message);
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
							onChangeText={(message) => this.setState({ message })}
							style={styles.inputText} />
					</ScrollView>
				</View>
				<View style={styles.button}>
					<Button label={'Send'} onPress={this.onSubmit.bind(this)} />
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
		alignItems: 'flex-start',
		flexDirection: 'row'
	},

	input: {
		flex: 0.9,
		marginVertical: 5,
	},

	inputText: {
		height: 50,
		padding: 5,
		color: '#333',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
	},

	button: {
		flex: 0.1
	}
});

module.exports = ChatForm;