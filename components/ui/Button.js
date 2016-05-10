'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

class Button extends Component
{

	nonClickableButton()
	{
		const buttonState = this.props.disabledButton ? { backgroundColor: '#aaa' } : '';
		const textColor = this.props.disabledButton ? { color: '#333' } : '';

		let { label } = this.props;
		
		return (
			<View style={[styles.button, buttonState]}>
				<Text style={[styles.label, textColor]}>
					{label}
				</Text>
			</View>
		)
	}

	clickableButton()
	{
		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				underlayColor={'#ddd'}
			>
				{ this.nonClickableButton() }
			</TouchableHighlight>	
		)
	}

	render()
	{
		if( this.props.disabledButton )
		{
			return this.nonClickableButton();
		}

		return this.clickableButton();
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 5,
		borderRadius: 2,
		backgroundColor: 'white',
	},

	label: {
		fontSize: 10,
		color: '#d32f2f',
		textAlign: 'center'
	}
})

module.exports = Button;