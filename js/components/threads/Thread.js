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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userThreadsActionCreators from '../../actions/threads';

import Pusher from 'pusher-js/react-native';
import ThreadMessageRow from './ThreadMessageRow';
import ChatForm from '../ChatForm';

import GS from '../GlobalStyles';

class Thread extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			hasCommunicated: true,
		}
	}

	componentDidMount()
	{
		this.listenToIncomingMessage();
	}

	listenToIncomingMessage()
	{
		let pusher = new Pusher('a892016947101331c193');
		let channel = pusher.subscribe('whenUserReplied-'+this.props.thread.id);
		
		channel.bind('App\\Events\\UserReplied', function(data) {
			console.log('UserReplied', data);
			// let newMessage = data.message;
		}.bind(this));
	}

	render()
	{
		let { thread } = this.props;
		console.log('Render thread', thread);

		const messages = thread.messages.map((message, index) => {
			// if message.user_id == this.props.currentUser.id then align the message to the right
			let alignRight = false;
			if( this.props.currentUser.id === message.sender_id ) {
				alignRight = true;
			}

			return (
				<ThreadMessageRow 
					key={index} 
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
			console.log(responseText);
		})
		.catch((error) => {
			console.warn(error);
		})
		.done();
	}

	replyTo(message)
	{
		let { thread, currentUser, otherUser } = this.props;
		// reply to the other user on this thread id with this message and i am current user
		this.props.replyTo(otherUser, thread, message, currentUser); 
	}

	loading()
	{
		return (
			<ActivityIndicatorIOS animating={true} size={'large'} style={GS.loading} />
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		threads: state.threads
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userThreadsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Thread);

const styles = StyleSheet.create({
	messages: {
		flex: 1,
	},

	scrollView: {
		flex: 0.9,
		backgroundColor: 'white',
	},

	form: {
		flex: 0.1,
	}

});

