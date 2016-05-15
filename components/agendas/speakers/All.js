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

import AgendaSpeaker from './Row';
import GS from './../../GlobalStyles';

class All extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		let speakers = this.props.speakers.map((speaker) => {
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
				<Text style={[GS.themeFont, GS.pageTitle]}>Speakers</Text>
				<View>
					{ speakers }
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	
});

module.exports = All;