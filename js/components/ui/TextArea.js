'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

class InputTextMultiline extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}

	render()
	{
		let { label } = this.props;
		return (
			<View style={styles.input}>
				{ this.props.label ?
					<Text style={styles.label}>
						{label}
					</Text> : <View></View>
				}
				<TextInput 
					autoCorrect={false}
					autoCapitalize={'none'}
					multiline={true}
					value={this.props.value}
					onChangeText={(text) => this.props.onChangeText(text)}
					style={styles.textarea} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},

	input: {
		marginTop: 5,
		marginBottom: 5,
	},

	label: {
		marginBottom: 5,
	},

	textarea: {
		height: 50,
		padding: 5,
		fontSize: 17,
		color: '#333',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
	}
});

module.exports = InputTextMultiline;