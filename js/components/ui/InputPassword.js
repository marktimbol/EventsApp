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

class InputPassword extends Component
{
	render()
	{
		let { label } = this.props;
		return (
			<View style={styles.input}>
				<Text style={styles.label}>
					{label}
				</Text>
				<TextInput 
					secureTextEntry={true}
					autoCorrect={false}
					autoCapitalize={'none'}
					ref="password"
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

module.exports = InputPassword;