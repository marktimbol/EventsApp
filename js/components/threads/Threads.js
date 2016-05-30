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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as userThreadActionCreators from '../../actions/threads';

import ThreadRow from './ThreadRow';

import GS from '../GlobalStyles';

class Threads extends Component
{
	componentDidMount()
	{
		console.log(this.props);
		this.props.fetchUserThreads(this.props.currentUser);
	}

	render()
	{
		let threads = this.props.threads.map((thread, index) => {
			return (
				<ThreadRow 
					key={index}
					thread={thread} 
					currentUser={this.props.currentUser}
					onPress={() => this.showThread(thread)} />
			)
		})
		return (
			<View style={styles.whiteBg}>
				{threads}
			</View>
		)
	}

	showThread(thread)
	{
		let name = thread.receiver.name;
		if( this.props.currentUser.id === thread.receiver_id ) {
			name = thread.sender.name;
		}

		this.props.getSingleThread(thread);

		Actions.thread({
			currentUser: this.props.currentUser,
			otherUser: thread.receiver_id
		});
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
		currentUser: state.user.user.user,
		threads: state.threads
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userThreadActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Threads);

const styles = StyleSheet.create({
	whiteBg: {
		flex: 1,
		backgroundColor: 'white',
	},	
});

