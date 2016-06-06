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
			<View style={[styles.messageContainer]}>
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
			<View style={styles.messageContainer}>
				<View style={styles.left}>
					{ this.renderAvatar() }
				</View>

				<View style={styles.right}>
					{ this.renderLeftAlignMessage() }
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

	renderLeftAlignMessage()
	{
		let { message } = this.props;

		return (
			<View style={styles.bodyContainer}>
				<View style={[styles.message, styles.pushLeft]}>
					<Text style={[GS.body, styles.body]}>
						{message.message}
					</Text>
					<TimeAgo time={message.created_at} style={[styles.time, styles.timeAlignLeft]} />
				</View>
				<View style={styles.spacer}></View>
			</View>
		)
	}

	renderRightAlignMessage()
	{
		let { message } = this.props;
		
		return (
			<View style={styles.bodyContainer}>
				<View style={styles.spacer}></View>
				<View style={[styles.message, styles.pushRight]}>
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
	messageContainer: {
		padding: 10,
		flexDirection: 'row',
	},

	message: {
		flex: 1,
	},

	left: {
		flex: 0.1,
	},

	right: {
		flex: 0.9,
	},

	bodyContainer: {
		flex: 1,
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

	time: {
		fontSize: 7,
		color: '#888',
		textAlign: 'right',
		marginTop: 2,
	},

	timeAlignLeft: {
		textAlign: 'left'
	},

	pushLeft: {
		marginLeft: 5,
	},

	pushRight: {
		marginRight: 10,
	},
})

module.exports = ThreadMessageRow;