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
		let { label } = this.props;
		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				underlayColor={'#ddd'}
			>
				<View style={styles.button}>
					<Text style={styles.label}>{label}</Text>
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
		color: '#d32f2f',
		textAlign: 'center'
	}
})

module.exports = Button;