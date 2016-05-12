'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

class Message extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<View style={styles.message}>
				<View style={styles.left}>
					<Image source={require('../images/avatar.jpg')} style={styles.avatar} />
				</View>

				<View style={styles.right}>
					<Text style={styles.body}>
						{this.props.message.message}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	message: {
		padding: 10,
		borderRadius: 3,
		marginBottom: 10,
		flexDirection: 'row',
		backgroundColor: 'white',
	},

	left: {
		flex: 0.1,
		marginRight: 10,
	},

	right: {
		flex: 0.9,
	},

	body: {
		color: '#333',
		fontSize: 10,
		paddingHorizontal: 5,
		fontFamily: 'Lato-Regular'
	},

	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
})

module.exports = Message;