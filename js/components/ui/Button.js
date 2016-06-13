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

import { themeColor } from '../../env';

class Button extends Component
{
	render()
	{
		let { enabled, hasCustomBg } = this.props;
		let buttonStyles = { backgroundColor: '#888' }
		let labelStyles = { color: 'white' }

		if( enabled ) {
			buttonStyles = { backgroundColor: themeColor }
			labelStyles = { color: 'white' }

			if( hasCustomBg ) {
				buttonStyles = { backgroundColor: hasCustomBg }
				labelStyles = { color: themeColor }	
			}
		}

		if( enabled ) {
			return (
				<TouchableHighlight
					onPress={this.props.onPress}
					underlayColor={'#ddd'}
				>
					{ this.renderButtonText(buttonStyles, labelStyles) }
				</TouchableHighlight>	
			)
		}

		return (
			<View>
				{ this.renderButtonText(buttonStyles, labelStyles) }
			</View>
		)

	}

	renderButtonText(buttonStyles, labelStyles)
	{
		let { label } = this.props;

		return (
			<View style={[styles.button, buttonStyles]}>
				<Text style={[styles.label, labelStyles]}>
					{label}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 5,
		borderRadius: 2,
		borderColor: 'white',
		backgroundColor: 'white',
		// borderWidth: StyleSheet.hairlineWidth,
	},

	label: {
		fontSize: 10,
		textAlign: 'center'
	}
})

module.exports = Button;