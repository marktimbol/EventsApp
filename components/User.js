'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

class User extends Component
{
	constructor(props)
	{
		super(props);
	}

	showThread(user)
	{
		alert('show thread.');
	}

	render()
	{
		return (
			<View>
				<TouchableHighlight
					onPress={() => this.showThread(this.props.user)}
				>
					<View style={styles.imageContainer}>
						<View>
							<Image source={require('../images/avatar.jpg')} style={styles.avatar} />
						</View>

						<View>
							<Text style={[styles.text, styles.name]}>{this.props.user.name}</Text>
							<Text style={[styles.text, styles.designation]}>{this.props.user.designation}</Text>
							<Text style={[styles.text, styles.company]}>{this.props.user.company}</Text>
						</View>
					</View>
				</TouchableHighlight>

				<View style={styles.content}>
					<Text style={styles.title}>About</Text>
					<Text style={styles.body}>
						{this.props.user.about}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 250,
		backgroundColor: '#d32f2f',
		marginTop: 64,
	},

	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 20,
	},

	text: {
		color: 'white',
		textAlign: 'center',
	},

	name: {
		marginBottom: 10,
	},

	designation: {
		fontSize: 10,
		marginBottom: 5,
	},

	company: {
		fontSize: 10,
		marginBottom: 20,
	},

	content: {
		padding: 10,
	},

	title: {
		fontSize: 13,
		marginTop: 20,
		marginBottom: 10,
	},

	body: {
		fontSize: 11,
		color: '#333',
		lineHeight: 16,
	}
})

module.exports = User;