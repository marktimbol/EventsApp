'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import User from '../../components/User';

class AgendaSpeaker extends Component
{
	constructor(props)
	{
		super(props);
	}

	onPress(speaker)
	{
		this.props.navigator.push({
			title: speaker.name,
			component: User,
			passProps: { user: speaker }
		});
	}

	render()
	{
		const roles = this.props.roles.map((role) => {
			return (
				<Text style={[styles.textMuted, styles.role]} key={role.id}>
					{role.title}
				</Text>
			)
		});

		return (
			<TouchableHighlight
				onPress={() => this.onPress(this.props.speaker)}
				underlayColor={'#ddd'}
			>
				<View style={styles.speaker}>
					<View style={styles.speaker__image}>
						<Image 
							source={require('../../images/avatar.jpg')}
							style={styles.avatar} />
					</View>

					<View style={styles.speaker__info}>
						<Text style={styles.name}>
							{this.props.speaker.name}
						</Text>
						<Text style={[styles.textMuted, styles.designation]}>
							{this.props.speaker.designation}
						</Text>
						<Text style={[styles.textMuted, styles.company]}>
							{this.props.speaker.company}
						</Text>

						<View style={styles.roles}>
							{roles}
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	textMuted: {
		fontSize: 11,
		color: '#888',
		lineHeight: 16,
	},

	speaker: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},

	speaker__image: {
		flex: 0.2,
	},

	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25
	},

	speaker__info: {
		flex: 0.8
	},

	name: {
		fontSize: 11,
	},

	designation: {
		fontSize: 10
	},

	company: {
		fontSize: 10
	},

	roles: {
		flexDirection: 'row',
		marginTop: 10,
	},

	role: {
		fontSize: 7,
		color: 'white',
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 5,
		paddingRight: 5,
		lineHeight: 0,
		borderRadius: 2,
		marginRight: 5,
		backgroundColor: '#03a9f4',
	},
})

module.exports = AgendaSpeaker;