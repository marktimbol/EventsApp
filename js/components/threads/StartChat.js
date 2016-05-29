'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	ActivityIndicatorIOS,
	ScrollView,
	StyleSheet
} from 'react-native';

import Pusher from 'pusher-js/react-native';

import ThreadRow from './ThreadRow';
import ChatForm from '../ChatForm';

import GS from '../GlobalStyles';
const domain = 'http://mecsc.dev';

class StartChat extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			thread: [],
			messages: [],
			loaded: false,
			hasCommunicated: false,
		}
	}

	componentDidMount()
	{
		//if we already talked to each other before, then fetchThread().

		if( this.state.hasCommunicated )
		{
			this.fetchThread();
			this.listenToIncomingMessage();
		}
		else {
			this.setState({
				loaded: true,
			});
		}
	}

	componentWillUnmount()
	{
		this.setState({
			loaded: false,
		});
	}

	fetchThread()
	{	
		let { thread, currentUser } = this.props;
		const url = `${domain}/api/user/threads/${thread.id}/?api_token=${currentUser.api_token}`;

		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					thread: responseData,
					messages: responseData.messages,
					loaded: true,
				});
			})
			.catch((error) => {
				console.warn(error);
			})
			.done();
	}

	listenToIncomingMessage()
	{
		let pusher = new Pusher('a892016947101331c193');
		let channel = pusher.subscribe('whenUserReplied-'+this.props.thread.id);
		
		console.log('pusher', pusher);

		channel.bind('App\\Events\\UserReplied', function(data) {
			let newMessage = data.message;
			this.setState({
				messages: this.state.messages.concat(newMessage)
			});
		}.bind(this));
	}

	render()
	{
		if( ! this.state.loaded )
		{
			return this.loading();
		}

		const messages = this.state.messages.map((message) => {
			// if message.user_id == this.props.currentUser.id then align the message to the right
			let alignRight = false;
			if( this.props.currentUser.id === message.sender_id )
			{
				alignRight = true;
			}

			return (
				<ThreadRow key={message.id} 
					message={message}
					alignRight={alignRight} />
			)
		});

		return (
			<View style={styles.messages}>
				<ScrollView style={styles.scrollView}>
					{messages}
				</ScrollView>
				<View style={styles.form}>
					<ChatForm 
						onStartThread={this.submitForm.bind(this)} />
				</View>
			</View>
		)
	}

	submitForm(message)
	{
		return ! this.state.hasCommunicated ? this.startThread(message) : this.replyTo(message);
	}

	startThread(message)
	{
		const url = `${domain}/api/threads`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: this.props.currentUser.api_token,
				receiver_id: this.props.otherUser,
				message: message
			})
		})
		.then((response) => response.json())
		.then((responseText) => {
			this.setState({
				hasCommunicated: true,
			})
			console.log(responseText);
		})
		.catch((error) => {
			console.warn(error);
		})
		.done();
	}

	replyTo(message)
	{
		const url = `${domain}/api/threads/${this.props.thread.id}/replies`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: this.props.currentUser.api_token,
				receiver_id: this.props.otherUser,
				message: message
			})
		})
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData);
			// this.setState({
			// 	messages: this.state.messages.concat(responseData)
			// });
		})
		.done();
	}

	loading()
	{
		return (
			<ActivityIndicatorIOS animating={true} size={'large'} style={GS.loading} />
		)
	}
}

const styles = StyleSheet.create({
	messages: {
		flex: 1,
	},

	scrollView: {
		flex: 0.8,
		backgroundColor: '#FAFAFA',
	},

	form: {
		flex: 0.2,
	}

});

module.exports = StartChat;