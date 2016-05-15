'use strict';

import React, {
	Component
} from 'react';

import {
	TouchableHighlight,
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import GS from '../GlobalStyles';

class ThreadRow extends Component
{
	render()
	{
		return (
			<TouchableHighlight underlayColor={'#ddd'} 
				onPress={this.props.onPress}
			>
				<View style={styles.thread}>
					<View style={styles.left}>
						<Image source={require('../../images/avatar.jpg')} style={GS.avatar} />
					</View>

					<View style={styles.right}>
						<View>
							<Text style={[GS.themeFont, styles.subtitle]}>
								{this.props.thread.user.name}
							</Text>
							<Text style={[GS.themeFont, GS.body]} numberOfLines={2}>
								{this.props.thread.subject}
							</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({

	thread: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',

		padding: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},

	left: {
		flex: 0.2,
	},

	right: {
		flex: 0.8,
	},

	name: {
		color: '#333',
		fontSize: 14,
		marginBottom: 5,
	},
});

module.exports = ThreadRow;