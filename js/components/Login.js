'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight,
	ActivityIndicatorIOS,
	StyleSheet,
	NetInfo,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActionCreators from '../actions/user';
import * as scheduleActionCreators from '../actions/schedules';
import * as speakerActionCreators from '../actions/speakers';
import * as exhibitorActionCreators from '../actions/exhibitors';
import * as mediasActionCreators from '../actions/medias';

import { Actions } from 'react-native-router-flux';
import Schedules from './schedules/Schedules';
import LoginForm from './LoginForm';

class Login extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			connection: ''
		}
	}

	componentDidMount()
	{
		NetInfo.fetch().done((connection) => {
			this.setState({
				connection
			})
			this.props.fetchSchedules();
			this.props.fetchSpeakers();
			this.props.fetchExhibitors();
			this.props.fetchMediaPartners();
		});

	}

	render()
	{
		let { authenticating, authenticated, user } = this.props;

		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<View>
						<View style={styles.logoContainer}>
							<Image source={require('../../images/logo.png')} style={styles.logo} resizeMode={'contain'} />
						</View>
					</View>

					{ authenticating ?
						<View style={styles.loading}>
							<ActivityIndicatorIOS animating={true} size={'large'} color={'white'} />
						</View>
						:
						<View>
							<LoginForm onSubmit={(email, password) => this.onSubmit(email, password)} />
							<View>
								<Text style={styles.message}>{this.props.message}</Text>
							</View>
						</View>
					}
					<View style={styles.actions}>
						<Text style={styles.link}>Create new AIMCongress Account</Text>
						<Text style={styles.link}>Forgot password?</Text>
					</View>
				</View>
				{
					this.state.connection == 'none' ? 
						<View style={styles.noConnection}>
							<Text style={styles.noConnectionText}>No internet connection</Text> 
							<TouchableHighlight underlayColor={'white'} onPress={this.retryConnection}>
								<Text style={styles.retry}>Retry</Text>
							</TouchableHighlight>
						</View>
						: 
						<View></View>
				}
			</View>
		)
	}

	onSubmit(email, password)
	{
		this.setState({
			formWasSubmitted: true,
		});

		this.props.authenticateUser(email, password);
	}

}

const mapStateToProps = (state) => {
	return {
		authenticating: state.is.authenticating,
		authenticated: state.is.authenticated,
		user: state.user,
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		Object.assign({}, 
			userActionCreators, 
			speakerActionCreators, 
			scheduleActionCreators, 
			exhibitorActionCreators,
			mediasActionCreators
		), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d32f2f',
	},

	logoContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},

	logo: {
		width: 80,
		height: 80,
		borderRadius: 40
	},

	loading: {
		marginTop: 50,
	},

	actions: {
		// flex: 1,
		marginTop: 30,
	},

	link: {
		color: 'white',
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 10,
	},

	message: {
		color: 'white',
		fontSize: 12,
		textAlign: 'center',
		marginTop: 10,	
	},

	noConnection: {
		backgroundColor: '#ff9800',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	noConnectionText: {
		fontSize: 12,
		color: 'white',
		textAlign: 'center',
		padding: 10,
	},

	retry: {
		fontSize: 10,
		borderBottomWidth: 1,
		padding: 2,
		borderBottomColor: 'white',
	}

})

