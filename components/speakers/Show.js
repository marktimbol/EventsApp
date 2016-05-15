'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';

import GS from '../GlobalStyles';

class Show extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<View>
				<View style={styles.imageContainer}>
					<View style={styles.avatarBorder}>
						<Image source={require('../../images/avatar.jpg')} style={styles.avatar} />
					</View>

					<View>
						<Text style={[GS.themeFont, styles.text, styles.name]}>
							{this.props.speaker.name}
						</Text>
						<Text style={[GS.themeFont, styles.text, styles.designation]}>
							{this.props.speaker.designation}
						</Text>
						<Text style={[GS.themeFont, styles.text, styles.company]}>
							{this.props.speaker.company}
						</Text>
					</View>
				</View>

				<View style={styles.content}>
					<Text style={[GS.themeFont, GS.pageTitle]}>About</Text>
					<Text style={[GS.themeFont, GS.body]}>
						{this.props.speaker.about}
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

	avatarBorder: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 20,
		borderColor: '#ddd',
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
	},

	avatar: {
		width: 90,
		height: 90,
		borderRadius: 45,
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

module.exports = Show;