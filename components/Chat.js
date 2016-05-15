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

import ChatForm from './ChatForm';

const temporaryApi = 'jLzrFiv9SKhJGZEQWkk3L5BUQtsi6PKGgTv0b9PCOrblzjIjCEGcJd1UnlT4';

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
		});
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
					<View style={styles.message}>
						<View style={styles.left}>
							<Image source={require('../images/avatar.jpg')} style={styles.avatar} />
						</View>

						<View style={styles.right}>
							<Text style={styles.body}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Text>
						</View>
					</View>
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

	message: {
		padding: 10,
		borderRadius: 3,
		marginBottom: 10,
		flexDirection: 'row',
		backgroundColor: 'white',
	},

	left: {
		flex: 0.1,
		marginRight: 10,
	},

	right: {
		flex: 0.9,
	},

	body: {
		color: '#333',
		fontSize: 10,
		paddingHorizontal: 5,
	},

	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},

	form: {
		flex: 0.2,
		padding: 5,
		alignItems: 'flex-start',
		flexDirection: 'row'
	},
})

module.exports = Chat;