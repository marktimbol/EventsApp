import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import GS from './../GlobalStyles';
import { themeColor } from '../../env';
let { height, width } = Dimensions.get('window');

class SpeakerRow extends Component
{
	render()
	{
		let { speaker } = this.props;
		let divideBy = width > 400 ? 3 : 2;
		
		var itemWidth = {
			width: width / divideBy - 10
		}

		return (
			<View style={[styles.speakerContainer, itemWidth]}>
				<TouchableHighlight underlayColor={'#ddd'} onPress={() => this.viewSpeaker(speaker) }>
					<View style={styles.speaker}>
						<Image source={require('../../../images/avatar.jpg')} style={styles.avatar} />
						<Text style={[GS.themeFont, styles.name]}>
							{speaker.name}
						</Text>
						<Text style={[GS.themeFont, styles.designation]} numberOfLines={2}>
							{speaker.designation}
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		)
	}

	viewSpeaker(speaker)
	{
		Actions.speaker({
			speaker,
			currentUser: this.props.currentUser
		});
	}
}

const styles = StyleSheet.create({
	speakerContainer: {
		marginVertical: 5,
		marginHorizontal: 5,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: themeColor,
		shadowColor: '#333',
		shadowOpacity: 0.1,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},	

	speaker: {
		height: 150,		
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},

	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},

	name: {
		fontSize: 14,
		color: '#333',
		marginTop: 10,	
		textAlign: 'center',
	},

	designation: {
		fontSize: 12,
		color: '#888',
		textAlign: 'center',
	}
})

export default SpeakerRow;