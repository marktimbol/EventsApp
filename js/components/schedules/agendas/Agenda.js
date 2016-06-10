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

import AgendaSpeakers from './speakers/AgendaSpeakers';
import GS from '../../GlobalStyles';

class Agenda extends Component
{
	render()
	{
		let { agenda } = this.props;
		let speakers;

		if( agenda.speakers.length > 0 )
		{
			speakers = this.showSpeakers(agenda.speakers);
		}

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.agenda}>
					<View style={styles.header}>
						<Text style={[GS.themeFont, GS.pageTitle, styles.agendaTitle]}>
							{agenda.title}
						</Text>
						<View style={styles.agenda__venue}>
							<Text style={[styles.time]}>
								Time: {agenda.time}
							</Text>
							<Text style={styles.venue}>
								Venue: {agenda.venue}
							</Text>
						</View>
					</View>

					<View style={styles.row}>
						<Text style={[GS.themeFont, GS.pageTitle]}>
							Agenda Description
						</Text>

						<Text style={[GS.themeFont, GS.body]}>
							{agenda.description}
						</Text>
					</View>

					{ speakers }

				</View>	

				<View style={styles.footer}></View>
			
			</ScrollView>
		)
	}

	showSpeakers(speakers)
	{
		return (
			<AgendaSpeakers 
				speakers={speakers}  />
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: 'white',
	},

	row: {
		padding: 20,
	},

	header: {
		height: 200,
		backgroundColor: '#d32f2f',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},

	agendaTitle: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 30,
	},

	agenda__venue: {

	},

	time: {
		color: 'white',
		fontSize: 14,
		marginBottom: 10,
		textAlign: 'center',
	},

	venue: {
		color: 'white',
		fontSize: 14,
		textAlign: 'center',
	},

	textMuted: {
		lineHeight: 14,
	},

	agenda: {

	},

	footer: {
		height: 50,
	}
});

module.exports = Agenda;