import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import GS from './../GlobalStyles';

class SpeakerRow extends Component
{
	render()
	{
		let { speaker } = this.props;
		
		return (
			<View>
				<TouchableHighlight underlayColor={'#ddd'} onPress={() => this.viewSpeaker(speaker) }>
					<View style={[styles.speaker, GS.separator]}>
						<View style={styles.left}>
							<Image source={require('../../../images/avatar.jpg')} style={styles.avatar} />
						</View>

						<View style={styles.right}>
							<View style={styles.info}>
								<Text style={[GS.themeFont, styles.name]}>
									{speaker.name}
								</Text>
								<Text style={[GS.themeFont, GS.body]}>
									{speaker.designation} at {speaker.company}
								</Text>
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		)
	}

	viewSpeaker(speaker)
	{
		Actions.speaker({
			speaker
		});

		// this.props.navigator.push({
		// 	title: speaker.name,
		// 	component: Speaker,
		// 	passProps: { speaker }
		// })
	}
}

const styles = StyleSheet.create({
	speaker: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},

	left: {
		flex: 0.2
	},

	right: {
		flex: 0.8
	},

	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},

	name: {
		fontSize: 11,
		color: '#333',
	}	
})

export default SpeakerRow;