'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	ActivityIndicatorIOS,
	StyleSheet
} from 'react-native';

import Message from './Message';

const domain = 'http://mecsc.dev';

class ShowThread extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			thread: [],
			messages: [],
			loaded: false,
		}
	}

	componentDidMount()
	{
		console.log('componentDidMount');
		this.fetchThread();
	}

	componentWillUnmount()
	{
		console.log('componentWillUnmount');
		this.setState({
			loaded: false,
		});
	}

	fetchThread()
	{	
		console.log('fetchThread');

		let { thread, user } = this.props;
		const url = `${domain}/api/user/threads/${thread.id}/?api_token=${user.api_token}`;

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
		console.log('render');

		if( ! this.state.loaded )
		{
			this.loading();
		}

		const messages = this.state.messages.map((message) => {
			console.log(message);
			return (
				<Message key={message.id} message={message} />
			)
		});

		return (
			<View>
				{messages}
			</View>
		)
	}

	loading()
	{
		return (
			<ActivityIndicatorIOS animating={true} size={'large'} style={styles.loading} />
		)
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

module.exports = ShowThread;