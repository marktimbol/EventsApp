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
				this.setState({
					threads: this.state.threads.cloneWithRows(responseData),
					loaded: true,
				})
			})
			.catch((error) => {
				console.warn(error)
			})
			.done();
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
				onPress={() => this.showThread(thread)} />
		)
	}

	showThread(thread)
	{
		this.props.navigator.push({
			title: `Chat with ${thread.user.name}`,
			component: ShowThread,
			passProps: { 
				thread,
				otherUser: thread.user, 
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