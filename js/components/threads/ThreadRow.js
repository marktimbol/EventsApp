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
		let { thread, currentUser } = this.props;
		let lastSentMessage = thread.messages[thread.messages.length - 1].message;

		let name = thread.receiver.name;
		if( currentUser.id === thread.receiver_id ) {
			name = thread.sender.name;
		}

		return (
			<TouchableHighlight underlayColor={'#ddd'} 
				onPress={this.props.onPress}
			>
				<View style={styles.thread}>
					<View style={styles.left}>
						<Image source={require('../../../images/avatar.jpg')} style={GS.avatar} />
					</View>

					<View style={styles.right}>
						<View>
							<Text style={[GS.themeFont, styles.subtitle]}>
								{ name }
							</Text>
							<Text style={[GS.themeFont, GS.body]} numberOfLines={2}>
								{ lastSentMessage }
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