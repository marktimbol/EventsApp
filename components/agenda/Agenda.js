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

import AgendaSpeakers from './AgendaSpeakers';

class Agenda extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<View style={styles.agenda}>
				<Text style={styles.agenda__title}>{this.props.agenda.title}</Text>
				<Text style={styles.textMuted}>
					Time: {this.props.agenda.time}
				</Text>
				<Text style={styles.textMuted}>
					Venue: {this.props.agenda.venue}
				</Text>

				<AgendaSpeakers 
					speakers={this.props.agenda.speakers} 
					navigator={this.props.navigator} />
		
				<Text style={styles.title}>
					Agenda Description
				</Text>

				<Text style={[styles.textMuted, styles.body]}>
					{this.props.agenda.description}
				</Text>

			</View>	
		)
	}
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
	},

	textMuted: {
		fontSize: 11,
		color: '#888',
		lineHeight: 16,
	},

	agenda: {
		padding: 10,
	},

	agenda__title: {
		fontSize: 14,
		color: '#333',
		fontFamily: 'Helvetica',
		marginBottom: 2,
	},

	title: {
		fontSize: 13,
		marginTop: 20,
		marginBottom: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},

	body: {
		color: '#333',
		lineHeight: 16,
	}
});

module.exports = Agenda;