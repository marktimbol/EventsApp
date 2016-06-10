import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActionCreators from '../actions/user';
import * as scheduleActionCreators from '../actions/schedules';
import * as speakerActionCreators from '../actions/speakers';
import * as exhibitorActionCreators from '../actions/exhibitors';
import * as mediasActionCreators from '../actions/medias';

import Schedules from './schedules/Schedules';
import Speakers from './speakers/Speakers';
import Threads from './threads/Threads';
import Icon from 'react-native-vector-icons/Ionicons'

import { themeColor } from '../env'

class Home extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			selectedTab: ''
		}
	}

	componentDidMount()
	{
		this.props.fetchSchedules();
		this.props.fetchSpeakers();
		this.props.fetchExhibitors();
		this.props.fetchMediaPartners();

		this.setState({
			selectedTab: 'schedules'
		})
	}

	render()
	{
		return (
			<Schedules />
		)
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
	return bindActionCreators(Object.assign({}, userActionCreators, speakerActionCreators, scheduleActionCreators, exhibitorActionCreators, mediasActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
