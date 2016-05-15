'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
} from 'react-native';

import AgendaSpeakers from './speakers/All';
import GS from './../GlobalStyles';

class Show extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.agenda}>
					<Text style={[GS.themeFont, GS.pageTitle, styles.pageTitle]}>
						{this.props.agenda.title}
					</Text>
					<Text style={[GS.textMuted, styles.textMuted]}>
						Time: {this.props.agenda.time}
					</Text>
					<Text style={[GS.textMuted, styles.textMuted]}>
						Venue: {this.props.agenda.venue}
					</Text>

					<AgendaSpeakers 
						speakers={this.props.agenda.speakers} 
						navigator={this.props.navigator} />
			
					<Text style={[GS.themeFont, GS.pageTitle]}>
						Agenda Description
					</Text>

					<Text style={[GS.themeFont, GS.body]}>
						{this.props.agenda.description}
					</Text>

				</View>	
				<View style={styles.footer}></View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({

	scrollView: {
		flex: 1,
	},

	row: {
		flex: 1,
		flexDirection: 'row',
	},

	pageTitle: {
		marginTop: 0,
	},

	textMuted: {
		lineHeight: 14,
	},

	agenda: {
		padding: 10,
	},

	footer: {
		height: 100,
	}
});

module.exports = Show;