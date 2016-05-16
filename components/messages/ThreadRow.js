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
	componentDidMount()
	{
		console.log(this.props.currentUser, this.props.thread);
	}

	render()
	{
		let lastSentMessage = this.props.thread.messages[this.props.thread.messages.length - 1].message;
		
		let name = this.props.thread.receiver.name;
		if( this.props.currentUser.id === this.props.thread.receiver_id )
		{
			name = this.props.thread.sender.name;
		}

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