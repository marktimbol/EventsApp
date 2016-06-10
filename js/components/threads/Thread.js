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
import * as threadActionCreators from '../../actions/threads';
import * as userActionCreators from '../../actions/user';

import Pusher from 'pusher-js/react-native';
import ThreadMessageRow from './ThreadMessageRow';
import ChatForm from '../ChatForm';
import Loading from '../Loading';
import GS from '../GlobalStyles';
import { themeColor } from '../../env';

class Thread extends Component
{
	componentDidMount()
	{
		this.listenToIncomingMessage();
		this.scrollToBottom();
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
		let { thread, currentUser, isSending, hasConversation } = this.props;
		let messages;
		if( hasConversation )
		{
			messages = thread.messages.map((message, index) => {
				// Align message to the right?
				let alignRight = false;
				if( currentUser.id === message.sender_id ) {
					alignRight = true;
				}
				return (
					<ThreadMessageRow 
						key={index} 
						message={message}
						alignRight={alignRight} />
				)
			});
		}

		return (
			<View style={styles.messages}>
				<ScrollView 
					ref={component => this._scrollView = component}
					style={styles.scrollView}
				>
					{messages}
					{ isSending ? <Loading type={'Small'} color={themeColor} /> : <View></View> }
				</ScrollView>
				<View style={styles.form}>
					<ChatForm 
						onStartThread={this.submitForm.bind(this)} />
				</View>
			</View>
		)
	}

    scrollToBottom()
    {
    	// scrollTo bottom
        let innerScrollView = this._scrollView.refs.InnerScrollView;
        let scrollView = this._scrollView.refs.ScrollView;

        requestAnimationFrame(() => {
            innerScrollView.measure((innerScrollViewX, innerScrollViewY, innerScrollViewWidth, innerScrollViewHeight) => {
                scrollView.measure((scrollViewX, scrollViewY, scrollViewWidth, scrollViewHeight) => {
                    var scrollTo = innerScrollViewHeight - scrollViewHeight + innerScrollViewY;

                    if (innerScrollViewHeight < scrollViewHeight) {
                        return;
                    }

                    this._scrollView.scrollTo({ x: 0, y: scrollTo, animated: true });
                });
            });
        });
    }

	submitForm(message)
	{
		return ! this.props.hasConversation ? this.startThread(message) : this.replyTo(message);
	}

	startThread(message)
	{
		let { currentUser, otherUser } = this.props;
		this.props.startThread(currentUser, otherUser, message);
	}

	replyTo(message)
	{
		let { thread, currentUser, otherUser } = this.props;
		// reply to the other user on this thread id 
		// with this message and i am current user 
		this.props.replyTo(otherUser, thread, message, currentUser);
	}

	loading()
	{
		return (
			<ActivityIndicatorIOS animating={true} size={'small'} style={[GS.loading, styles.loading]} />
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		isSending: state.is.sending,
		hasConversation: state.is.hasConversation,
		thread: state.thread,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, threadActionCreators, userActionCreators), dispatch)
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
	},

	loading: {
		alignItems: 'flex-end',
		margin: 15,
	}

});

