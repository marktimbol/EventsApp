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
import { create } from 'react-native-platform-stylesheet';
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
			<View style={[styles.row, styles.rowWithPadding]}>
				<View style={[styles.right]}>
					{ this.renderRightAlignMessage() }
				</View>
				<View style={styles.left}>
					{ this.renderAvatar() }
				</View>
			</View>
		)
	}

	renderRightAlignMessage()
	{
		let { message } = this.props;
		
		return (
			<View style={styles.row}>
				<View style={styles.spacer}></View>
				<View style={[styles.message, styles.messageRight]}>
					<View style={[styles.bodyBg, styles.senderBg]}>
						<Text style={[styles.body, styles.senderBgText]}>
							{ message.message }
						</Text>
					</View>
					<TimeAgo style={styles.time} time={message.created_at} />
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

	leftAlignMessage()
	{
		return (
			<View style={[styles.row, styles.rowWithPadding]}>
				<View style={styles.left}>
					{ this.renderAvatar() }
				</View>

				<View style={styles.right}>
					{ this.renderLeftAlignMessage() }
				</View>
			</View>
		)
	}

	renderLeftAlignMessage()
	{
		let { message } = this.props;

		return (
			<View style={styles.row}>
				<View style={[styles.message, styles.messageLeft]}>
					<View style={[styles.bodyBg]}>
						<Text style={[GS.body, styles.body]}>{message.message}</Text>
					</View>
					<TimeAgo time={message.created_at} style={[styles.time, styles.timeAlignLeft]} />
				</View>
				<View style={styles.spacer}></View>
			</View>
		)
	}
}

const styles = create({
	row: {
		flexDirection: 'row',
	},

	rowWithPadding: {
		padding: 10,
	},

	message: {
		flex: 1,
	},

	messageLeft: {
		alignItems: 'flex-start',
	},

	messageRight: {
		alignItems: 'flex-end'
	},

	left: {
		flex: 0.1,
	},

	right: {
		flex: 0.9,
	},

	bodyBg: {
		padding: 5,
		borderRadius: 2,
		marginHorizontal: 10,
		backgroundColor: '#E9E9E9',
	},

	body: {
		color: '#333',
		fontSize: 12,
		ios: {
			lineHeight: 0,
		},
		android: {
			lineHeight: 18,
		}
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
		backgroundColor: '#f44336',
	},

	senderBgText: {
		textAlign: 'left',
		color: 'white'
	},

	time: {
		fontSize: 7,
		color: '#888',
		textAlign: 'right',
		marginTop: 2,
		marginHorizontal: 10,
	},

	timeAlignLeft: {
		textAlign: 'left'
	},
})

module.exports = ThreadMessageRow;