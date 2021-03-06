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

class InputText extends Component
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
					autoCorrect={false}
					autoCapitalize={'none'}
					value={this.props.value}
					onChangeText={(text) => this.props.onChangeText(text)}
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
		color: '#333',
		marginBottom: 5,
	},

	text: {
		fontSize: 17,
		width: 200,
		height: 30,
		padding: 5,
		color: '#333',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
	}
});

module.exports = InputText;