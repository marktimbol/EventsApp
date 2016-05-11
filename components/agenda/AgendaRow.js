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
					<View style={styles.left}>
						<View style={styles.indicator}></View>
						<View style={styles.line}></View>
					</View>
					<View style={styles.right}>
						<Text style={styles.timings}>{this.props.agenda.time}</Text>
						<View style={styles.info}>
							<Text style={styles.title}>
								{this.props.agenda.title}
							</Text>
							<Text style={styles.body} numberOfLines={3}>
								{this.props.agenda.description}
							</Text>
						</View>
					</View>
				</View>	
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({

	agenda: {
		flex: 1,
		alignItems: 'flex-start',
		borderColor: '#ddd',
		flexDirection: 'row',
	},

	timings: {
		color: '#d32f2f',
		fontSize: 13,
		marginTop: 0,
		fontFamily: 'Lato-Regular',
	},

	info: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 5,
		marginTop: 5,
		borderRadius: 2,
	},

	title: {
		fontSize: 12,
		color: '#555',
		marginTop: 0,
		fontFamily: 'Lato-Regular',
	},

	body: {
		color: '#888',
		fontSize: 11,
		fontFamily: 'Lato-Light'
	},

	left: {
		flex: 0.1,
		alignItems: 'center',
	},

	indicator: {
		width: 10,
		height: 10,
		top: 5,
		borderRadius: 5,
		backgroundColor: '#d32f2f',
	},

	line: {
		flex: 1,
		width: 1,
		height: 100,
		marginTop: 5,
		backgroundColor: '#ddd',
	},

	right: {
		flex: 0.9,
		alignItems: 'flex-start',
	}
});

module.exports = AgendaRow;