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

import MessageRow from './MessageRow';
import ChatForm from '../ChatForm';

import GS from '../GlobalStyles';
const domain = 'http://mecsc.dev';

class Show extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			thread: [],
			messages: [],
			loaded: false,
			hasCommunicated: true,
		}
	}

	componentDidMount()
	{
		this.fetchThread();
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

	render()
	{
		if( ! this.state.loaded )
		{
			return this.loading();
		}

		const messages = this.state.messages.map((message) => {
			// if message.user_id == this.props.currentUser.id then align the message to the right
			let alignRight = false;
			if( this.props.currentUser.id === message.user_id )
			{
				alignRight = true;
			}

			return (
				<MessageRow key={message.id} 
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
		if( ! this.state.hasCommunicated )
		{
			return this.startThread(message);
		}
		else
		{
			return this.replyTo(message);
		}
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
				to: this.props.otherUser.id,
				subject: message
			})
		})
		.then((response) => response.json())
		.then((responseText) => {
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

		console.log(this.props.currentUser.api_token, this.props.otherUser.id, message);

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: this.props.currentUser.api_token,
				to: this.props.otherUser.id,
				message: message
			})
		})
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData);
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
	},

	form: {
		flex: 0.2,
	}

});

module.exports = Show;