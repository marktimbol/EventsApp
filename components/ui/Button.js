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
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<TouchableHighlight
				onPress={this.onPress}
				underlayColor={'#ddd'}
			>
				<View style={styles.button}>
					<Text style={styles.label}>{this.props.label}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'white',
	},

	label: {
		fontSize: 10,
		color: '#d32f2f',
		textAlign: 'center'
	}
})

module.exports = Button;