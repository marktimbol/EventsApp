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

	onChange(e)
	{
		console.log('InputTextMultiline: onChange', e.target.value);
		// this.props.onChangeText;
	}

	render()
	{
		let { label } = this.props;
		return (
			<View style={styles.input}>
				<ScrollView 
					keyboardDismissMode={'none'}
					style={styles.scrollView}>
					<TextInput 
						autoCorrect={false}
						autoCapitalize={'none'}
						multiline={true}
						value={this.props.value}
						onChange={() => this.onChange}
						style={styles.inputText} />
				</ScrollView>
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

	inputText: {
		height: 50,
		padding: 5,
		color: '#333',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
	}
});

module.exports = InputTextMultiline;