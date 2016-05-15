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

import Chat from './Chat';
import GS from './GlobalStyles';

class User extends Component
{
	constructor(props)
	{
		super(props);
	}

	showThread(user)
	{
		// alert(user.name);
		this.props.navigator.push({
			title: `Chat with ${user.name}`,
			component: Chat,
			passProps: { user }
		});
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
							<Text style={[GS.themeFont, styles.text, styles.name]}>
								{this.props.user.name}
							</Text>
							<Text style={[GS.themeFont, styles.text, styles.designation]}>
								{this.props.user.designation}
							</Text>
							<Text style={[GS.themeFont, styles.text, styles.company]}>
								{this.props.user.company}
							</Text>
						</View>
					</View>
				</TouchableHighlight>

				<View style={styles.content}>
					<Text style={GS.pageTitle}>About</Text>
					<Text style={GS.body}>
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