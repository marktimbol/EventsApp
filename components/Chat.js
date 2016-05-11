'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import Message from './Message';
import ChatForm from './ChatForm';

const temporaryApi = 'lggq2ydDHGSNkMmgvSiyf7uaQoc45NBBnwpY5VvoXDvJVPJykSRA9Sz8ZfPG';

class Chat extends Component
{
	constructor(props)
	{
		super(props);
	
		this.state = {
			message: '',
			hasCommunicated: false
		}
	}

	componentDidMount()
	{
		this.checkIfThreadWasStarted();
	}

	checkIfThreadWasStarted()
	{
		const url = 'http://mecsc.dev/api/threads/hasCommunicated/'+this.props.user.id+'/?api_token='+temporaryApi;

		fetch(url)
		.then((response) => response.json())
		.then((responseText) => {
			this.setState({
				hasCommunicated: responseText.hasCommunicated
			});
		})
		.done();
	}

	startThread(message)
	{
		const url = 'http://mecsc.dev/api/threads';

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: temporaryApi,
				to: this.props.user.id,
				subject: message
			})
		})
		.then((response) => response.json())
		.then((responseText) => {
			console.log(responseText);
		})
		.catch((error) => {
			console.warn(error);
		});
	}

	//TODO tomorrow
	submitForm(message)
	{
		if( ! this.state.hasCommunicated )
		{
			this.startThread(message);
		}
		else
		{
			this.replyTo();
		}
	}

	render()
	{
		return (
			<View style={styles.chat}>
				<View style={styles.messages}>
					<Message />
				</View>

				<View style={styles.form}>
					<ChatForm 
						onStartThread={this.startThread.bind(this)} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	chat: {
		flex: 1,
		flexDirection: 'column',
	},

	messages: {
		flex: 0.8,
		padding: 10,
		backgroundColor: '#eee',
	},

	form: {
		flex: 0.2,
		padding: 5,
		alignItems: 'flex-start',
		flexDirection: 'row'
	},
})

module.exports = Chat;