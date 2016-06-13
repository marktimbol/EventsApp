'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet,
	ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as threadActionCreators from '../../actions/threads';
import * as userActionCreators from '../../actions/user';
import GS from '../GlobalStyles';

class Speaker extends Component
{
	componentDidMount()
	{
		this.props.noConversation();
	}

	render()
	{
		let { speaker } = this.props;

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.imageContainer}>
					<View style={styles.avatarBorder}>
						<Image source={require('../../../images/avatar.jpg')} style={styles.avatar} />
					</View>

					<View>
						<Text style={[GS.themeFont, styles.text, styles.name]}>
							{speaker.name}
						</Text>
						<Text style={[GS.themeFont, styles.text, styles.designation]}>
							{speaker.designation}
						</Text>
						<Text style={[GS.themeFont, styles.text, styles.company]}>
							{speaker.company}
						</Text>
					</View>
				</View>

				<View style={styles.actions}>
					<View style={styles.action}>
						<TouchableHighlight style={styles.action__link} underlayColor={'#c62828'} onPress={() => Actions.requestMeeting({ toUser: speaker.id }) }>
							<Text style={[GS.themeFont, GS.textCenter, styles.action__label]}>
								Request Meeting
							</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.action}>
						<TouchableHighlight style={styles.action__link} underlayColor={'#c62828'} onPress={() => this.startChat()}>
							<Text style={[GS.themeFont, GS.textCenter, styles.action__label]}>
								Send Message
							</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.about}>
					<Text style={[GS.themeFont, GS.pageTitle]}>About</Text>
					<Text style={[GS.themeFont, GS.body]}>
						{speaker.about}
					</Text>
				</View>
			</ScrollView>
		)
	}

	startChat()
	{
		let { currentUser, speaker } = this.props;

		this.props.checkIfTheyHaveConversation(currentUser, speaker.id);

		Actions.thread({
			currentUser: currentUser,
			otherUser: speaker.id
		});
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white'
	},

	imageContainer: {
		flex: 1,
		height: 250,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d32f2f',
	},

	avatarBorder: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 20,
		borderColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: StyleSheet.hairlineWidth,
	},

	avatar: {
		width: 90,
		height: 90,
		borderRadius: 45,
	},

	text: {
		color: 'white',
		textAlign: 'center',
	},

	name: {
		fontSize: 20,
		marginBottom: 10,
	},

	designation: {
		fontSize: 14,
		marginBottom: 5,
	},

	company: {
		fontSize: 14,
		marginBottom: 20,
	},

	actions: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#c62828',
	},

	action: {
		flex: 0.6,
	},

	action__link: {
		padding: 10,
	},

	action__label: {
		color: 'white',
		fontSize: 12,
	},

	about: {
		padding: 20,
	},

	title: {
		fontSize: 13,
		marginTop: 20,
		marginBottom: 10,
	},

	body: {
		fontSize: 11,
		color: '#333',
		lineHeight: 16,
	}
})

const mapStateToProps = (state) => {
	return {
		currentUser: state.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, threadActionCreators, userActionCreators), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Speaker);