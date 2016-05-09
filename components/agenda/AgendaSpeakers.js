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

import AgendaSpeaker from './AgendaSpeaker';

class AgendaSpeakers extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const speakers = this.props.speakers.map((speaker) => {
			return (
				<AgendaSpeaker 
					key={speaker.id}
					speaker={speaker} 
					roles={speaker.roles} 
					navigator={this.props.navigator} />
			)
		});
		return (
			<View>
				<Text style={styles.title}>Speakers</Text>
				<View>
					{ speakers }
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 13,
		marginTop: 20,
		marginBottom: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});

module.exports = AgendaSpeakers;