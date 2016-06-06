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
	render()
	{
		let { buttonBg } = this.props;

		let buttonStyles = {
			backgroundColor: 'white'
		}

		let labelStyles = {
			color: '#d32f2f',
		}

		if( buttonBg )
		{
			buttonStyles = {
				backgroundColor: buttonBg,
			}

			labelStyles = {
				color: 'white'
			}
		}

		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				underlayColor={'#ddd'}
			>
				<View style={[styles.button, buttonStyles]}>
					<Text style={[styles.label, labelStyles]}>
						{this.props.label}
					</Text>
				</View>
			</TouchableHighlight>	
		)
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
		textAlign: 'center'
	}
})

module.exports = Button;