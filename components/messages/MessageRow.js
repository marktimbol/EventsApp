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
import GS from '../GlobalStyles';

class MessageRow extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		if( this.props.alignRight )
		{
			return this.rightAlignMessage();
		}
		else
		{
			return this.leftAlignMessage();
		}
	}

	rightAlignMessage()
	{
		return (
			<View style={[styles.message]}>
				<View style={[styles.right, styles.rightAlign]}>
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
			<Image source={require('../../images/avatar.jpg')} style={styles.avatar} />
		)	
	}

	renderMessage()
	{
		return (
			<View style={styles.bodyContainer}>
				<Text style={[GS.body, styles.body]}>
					{this.props.message.message}
				</Text>
				<View style={styles.spacer}></View>
			</View>
		)
	}

	renderRightAlignMessage()
	{
		return (
			<View style={styles.bodyContainer}>
				<View style={styles.spacer}></View>
				<Text style={[GS.body, styles.body, styles.senderBg]}>
					{this.props.message.message}
				</Text>
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
	},

	bodyContainer: {
		flex: 1,
		flexDirection: 'row',
	},

	body: {
		flex: 0.8,
		color: '#333',
		padding: 10,
		// borderRadius: 10,
		marginHorizontal: 10,
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
		backgroundColor: '#0089FF',
	}
})

module.exports = MessageRow;