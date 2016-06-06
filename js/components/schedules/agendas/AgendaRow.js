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

import CheckBox from '../../ui/CheckBox';
import GS from '../../GlobalStyles';

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
						<View style={styles.redCircle}></View>
						<View style={styles.line}></View>
					</View>
					<View style={styles.right}>
						<Text style={[GS.themeFont, GS.pageTitle, styles.pageTitle]}>
							{this.props.agenda.time}
						</Text>
						<View style={styles.info}>
							<Text style={[GS.themeFont, GS.subTitle]}>
								{this.props.agenda.title}
							</Text>
							<Text style={[GS.themeFontLight, GS.body, styles.body]} numberOfLines={3}>
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

	info: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 5,
		marginRight: 15,
		marginTop: 5,
		borderRadius: 2,
	},

	pageTitle: {
		marginVertical: 2,
	},

	left: {
		flex: 0.1,
		alignItems: 'center',
	},

	redCircle: {
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
	},

	body: {
		flex: 1,
	}
});

module.exports = AgendaRow;