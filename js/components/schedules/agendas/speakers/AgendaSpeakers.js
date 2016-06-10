'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';

import AgendaSpeakerRow from './AgendaSpeakerRow';
import GS from '../../../GlobalStyles';

class AgendaSpeakers extends Component
{
	render()
	{
		let speakers = this.props.speakers.map((speaker, index) => {
			return (
				<AgendaSpeakerRow 
					key={index}
					speaker={speaker} 
					roles={speaker.roles} />
			)
		});
		
		return (
			<View>
				<Text style={[GS.themeFont, GS.pageTitle, styles.row, styles.pageTitle]}>Speakers</Text>
				<View>
					{ speakers }
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	row: {
		marginHorizontal: 20,
	},
})

module.exports = AgendaSpeakers;