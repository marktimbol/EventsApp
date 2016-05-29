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
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActionCreators from '../actions/user';
import * as scheduleActionCreators from '../actions/schedules';
import * as speakerActionCreators from '../actions/speakers';

import { Actions } from 'react-native-router-flux';
import Schedules from './schedules/Schedules';
import LoginForm from './LoginForm';

class Login extends Component
{
	constructor(props)
	{
		super(props);
	}

	componentDidMount()
	{
		console.log(this.props);

		// Download the internet
		this.props.fetchSchedules();
		this.props.fetchSpeakers();
	}

	render()
	{
		let { loading, authenticated, user } = this.props;

		return (
			<View style={styles.container}>
				<View>
					<View style={styles.logo}></View>
				</View>

				{ loading ?
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
	console.log('mapStateToProps', state);
	return {
		loading: state.user.loading,
		user: state.user.user,
		authenticated: state.user.user.authenticated
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Object.assign({}, userActionCreators, speakerActionCreators, scheduleActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d32f2f',
	},

	logo: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'white'
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
	}
})

