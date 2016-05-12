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
	StyleSheet
} from 'react-native';

import ShowThread from './ShowThread';

const domain = 'http://mecsc.dev';

class Messages extends Component
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
		console.log(this.props.navigator);
		this.fetchUserThreads();
	}

	fetchUserThreads()
	{
		const url = `${domain}/api/user/threads/?api_token=${this.props.user.api_token}`;

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

	loading()
	{
		return (
			<ActivityIndicatorIOS animating={true} size={'large'} style={styles.loading} />
		)
	}

	renderRow(thread, sectionID, rowID)
	{
		return (
			<TouchableHighlight underlayColor={'#ddd'} onPress={this.onPress.bind(this, thread)}>
				<View style={styles.message}>
					<View style={styles.left}>
						<Image source={require('../images/avatar.jpg')} style={styles.avatar} />
					</View>

					<View style={styles.right}>
						<View>
							<Text style={styles.name}>{thread.user.name}</Text>
							<Text style={styles.body}>{thread.subject}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	onPress(thread)
	{
		this.showThread(thread);
		// this.fetchThread(thread);
	}

	showThread(thread)
	{
		this.props.navigator.push({
			title: thread.user.name,
			component: ShowThread,
			passProps: { user: this.props.user, thread }
		})
	}
}

const styles = StyleSheet.create({
	listView: {
		flex: 1,
		padding: 10,
	},	

	message: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingVertical: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},

	left: {
		flex: 0.2,
	},

	right: {
		flex: 0.8,
	},

	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},

	name: {
		color: '#333',
		fontSize: 14,
		marginBottom: 5,
		fontFamily: 'Lato-Regular'
	},

	body: {
		color: '#888',
		fontSize: 9,
		fontFamily: 'Lato-Regular'
	},

	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

module.exports = Messages;