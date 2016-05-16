'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	ListView,
	Image,
	TouchableHighlight,
	ActivityIndicatorIOS,
	ScrollView,
	StyleSheet
} from 'react-native';

import ThreadRow from './ThreadRow';
import ShowThread from './Show';
import ChatForm from '../ChatForm';

import GS from '../GlobalStyles';
const domain = 'http://mecsc.dev';

class All extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			threads: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),

			loaded: false,
		}
	}

	componentDidMount()
	{
		this.fetchUserThreads();
	}

	fetchUserThreads()
	{
		const url = `${domain}/api/user/threads/?api_token=${this.props.currentUser.api_token}`;

		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				this.setState({
					threads: this.state.threads.cloneWithRows(responseData),
					loaded: true,
				});
			});
	}

	render()
	{
		if( ! this.state.loaded )
		{
			return this.loading();
		}

		return (
			<ListView 
				dataSource={this.state.threads}
				renderRow={this.renderRow.bind(this)}
				style={styles.listView} />
		)
	}

	renderRow(thread, sectionID, rowID)
	{
		return (
			<ThreadRow 
				thread={thread} 
				currentUser={this.props.currentUser}
				onPress={() => this.showThread(thread)} />
		)
	}

	showThread(thread)
	{
		let name = thread.receiver.name;

		if( this.props.currentUser.id === thread.receiver_id )
		{
			name = thread.sender.name;
		}

		this.props.navigator.push({
			title: `Chat with ${name}`,
			component: ShowThread,
			passProps: { 
				thread,
				otherUser: thread.receiver_id, 
				currentUser: this.props.currentUser
			}
		})
	}

	loading()
	{
		return (
			<ActivityIndicatorIOS animating={true} size={'large'} style={GS.loading} />
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},

	messages: {
		flex: 1,
	},

	listView: {
		flex: 0.7,
	},	

	form: {
		flex: 0.5,
	}
});

module.exports = All;