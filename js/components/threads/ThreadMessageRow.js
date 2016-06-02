'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

import Pusher from 'pusher-js/react-native';
import TimeAgo from 'react-native-timeago';

import GS from '../GlobalStyles';

class ThreadMessageRow extends Component
{
	render()
	{
		if( this.props.alignRight ) {
			return this.rightAlignMessage();
		}
		
		return this.leftAlignMessage();
	}

	rightAlignMessage()
	{
		return (
			<View style={[styles.message]}>
				<View style={[styles.right]}>
					{ this.renderRightAlignMessage() }
				</View>

				<View style={styles.left}>
					{ this.renderAvatar() }
				</View>
			</View>
		)
	}

	leftAlignMessage()
	{
		return (
			<View style={styles.message}>
				<View style={styles.left}>
					{ this.renderAvatar() }
				</View>

				<View style={styles.right}>
					{ this.renderMessage() }
				</View>
			</View>
		)
	}

	renderAvatar()
	{
		return (
			<Image source={require('../../../images/avatar.jpg')} style={styles.avatar} />
		)	
	}

	renderMessage()
	{
		return (
			<View style={styles.bodyContainer}>
				<View>
					<Text style={[GS.body, styles.body]}>
						{this.props.message.message}
					</Text>
					<Text>{ this.props.message.created_at }</Text>
				</View>
				<View style={styles.spacer}></View>
			</View>
		)
	}

	renderRightAlignMessage()
	{
		let { message } = this.props;
		console.log(message.created_at);
		
		return (
			<View style={styles.bodyContainer}>
				<View style={styles.spacer}></View>
				<View style={styles.messageWithDateContainer}>
					<Text style={[GS.body, styles.body, styles.senderBg]}>
						{message.message}
					</Text>
					<TimeAgo style={styles.time} time={message.created_at} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	message: {
		padding: 10,
		flexDirection: 'row',
	},

	left: {
		flex: 0.1,
	},

	right: {
		flex: 0.9,
		marginRight: 10,
	},

	bodyContainer: {
		flexDirection: 'row',
	},

	body: {
		color: '#333',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 2,
		backgroundColor: '#E9E9E9',
	},

	spacer: {
		flex: 0.2
	},

	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},

	senderBg: {
		color: 'white',
		backgroundColor: '#f44336',
		textAlign: 'right'
	},

	messageWithDateContainer: {
		// flex: 1,
		flexDirection: 'column',
		// backgroundColor: '#ddd'
	},

	time: {
		fontSize: 8,
		color: '#888',
		textAlign: 'right',
		marginTop: 2,
	}
})

module.exports = ThreadMessageRow;