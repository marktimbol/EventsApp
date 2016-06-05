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
import * as threadActionCreators from '../../actions/threads';
import * as userActionCreators from '../../actions/user';
import ThreadRow from './ThreadRow';
import GS from '../GlobalStyles';

class Threads extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			threads: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		}
	}

	componentDidMount()
	{
		this.setState({
			threads: this.state.threads.cloneWithRows(this.props.threads)
		})
	}

	componentWillReceiveProps(nextProps)
	{
		this.setState({
			threads: this.state.threads.cloneWithRows(nextProps.threads)
		})
	}

	render()
	{
		return (
			<ListView
				dataSource={this.state.threads}
				renderRow={this.renderRow.bind(this)}
				renderSectionHeader={this.renderSectionHeader}
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

	renderSectionHeader()
	{
		return (
			<Text style={GS.sectionHeader}>Messages</Text>
		)
	}

	showThread(thread)
	{
		let name = thread.receiver.name;
		if( this.props.currentUser.id === thread.receiver_id ) {
			name = thread.sender.name;
		}

		this.props.haveConversation();
		this.props.setCurrentThread(thread);

		Actions.thread({
			currentUser: this.props.currentUser,
			otherUser: thread.receiver_id
		});
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user,
		threads: state.threads
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, threadActionCreators, userActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Threads);

const styles = StyleSheet.create({
	listView: {
		backgroundColor: 'white',
	},	
});

