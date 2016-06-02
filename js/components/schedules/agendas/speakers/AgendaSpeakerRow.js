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

import { Actions } from 'react-native-router-flux';

import GS from '../../../GlobalStyles';

class AgendaSpeakerRow extends Component
{
	render()
	{
		let { speaker } = this.props;

		return (
			<TouchableHighlight
				onPress={() => this.onPress(speaker)}
				underlayColor={'#ddd'}
			>
				<View style={styles.speaker}>
					<View style={styles.speaker__image}>
						<Image 
							source={require('../../../../../images/avatar.jpg')}
							style={styles.avatar} />
					</View>

					<View style={styles.speaker__info}>
						<Text style={[GS.themeFont, styles.name]}>
							{speaker.name}
						</Text>
						<Text style={[GS.themeFont, GS.body]}>
							{speaker.designation}
						</Text>
						<Text style={[GS.themeFont, GS.body]}>
							{speaker.company}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	onPress(speaker)
	{
		Actions.speaker({ speaker });
	}
}

const styles = StyleSheet.create({
	speaker: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
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
		color: '#333',
		fontSize: 11,
		marginBottom: 3,
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

module.exports = AgendaSpeakerRow;