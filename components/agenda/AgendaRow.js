'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

import CheckBox from '../ui/CheckBox';

class AgendaRow extends Component
{
	render()
	{
		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				underlayColor={'#ddd'}>
				<View style={styles.agenda}>
					<View style={styles.agenda__info}>
						<Text style={styles.agenda__title} numberOfLines={1}>
							{this.props.agenda.title}
						</Text>
						<View style={styles.row}>
							<Text style={[styles.agenda__timings, styles.textMuted]}>
								{this.props.agenda.time}
							</Text>
							<Text style={[styles.agenda__venue, styles.textMuted]}>
								{this.props.agenda.venue}
							</Text>
						</View>
					</View>
					<View style={styles.agenda__action}>
						<CheckBox 
							onPress={() => this.props.toggleCheck(this.props.agenda)} />
					</View>	
				</View>	
			</TouchableHighlight>
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
	},

	agenda: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},

	agenda__title: {
		fontSize: 14,
		color: '#333',
		fontFamily: 'Helvetica',
		marginBottom: 2,
	},

	agenda__info: {
		flex: 0.9,
	},

	agenda__timings: {
		marginRight: 30,
	},

	agenda__action: {
		flex: 0.1,
	}
});

module.exports = AgendaRow;