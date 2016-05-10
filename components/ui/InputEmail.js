'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

class InputEmail extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render()
	{
		return (
			<View style={styles.input}>
				<Text style={styles.label}>
					{this.props.label}
				</Text>
				<TextInput 
					keyboardType={'email-address'}
					autoCorrect={false}
					autoCapitalize={'none'}
					value={this.props.value}
					style={styles.text} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
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
	}
});

module.exports = InputEmail;