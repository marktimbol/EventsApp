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
	ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import GS from '../GlobalStyles';

class Speaker extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.imageContainer}>
					<View style={styles.avatarBorder}>
						<Image source={require('../../../images/avatar.jpg')} style={styles.avatar} />
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

				<View style={styles.actions}>
					<View style={styles.action}>
						<TouchableHighlight underlayColor={'#c62828'} onPress={() => alert('Other action') }>
							<Text style={[GS.themeFont, GS.textCenter, styles.actionText]}>
								Other
							</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.action}>
						<TouchableHighlight underlayColor={'#c62828'} onPress={() => this.startChat() }>
							<Text style={[GS.themeFont, GS.textCenter, styles.actionText]}>
								Send Message
							</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.about}>
					<Text style={[GS.themeFont, GS.pageTitle]}>About</Text>
					<Text style={[GS.themeFont, GS.body]}>
						{this.props.speaker.about}
					</Text>
				</View>
			</ScrollView>

		)
	}

	startChat()
	{
		Actions.startChat({
			otherUser: this.props.speaker.id,
			currentUser: this.props.currentUser
		});
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white'
	},

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

	actions: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#b71c1c',
	},

	action: {
		flex: 0.6,
	},

	actionText: {
		color: 'white',
		fontSize: 10,
		padding: 10,
	},

	about: {
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

module.exports = Speaker;