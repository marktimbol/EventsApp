'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	ActivityIndicatorIOS,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as scheduleActionCreators from '../../actions/schedules';

import Agendas from './agendas/Agendas';
import GS from './../GlobalStyles';
const domain = 'http://mecsc.dev';

class Schedules extends Component
{
	componentDidMount()
	{
		this.props.fetchSchedules();
	}

	showLoading()
	{
		return (
			<View style={GS.loading}>
				<ActivityIndicatorIOS animating={true} size={'large'} />
			</View>
		)
	}

	render()
	{
		if( this.props.loading )
		{
			return this.showLoading();
		}

		let schedules = this.props.schedules.map((schedule, index) => {
			return (
				<Agendas 
					key={index}
					tabLabel={`Day ${index+1}`} 
					agendas={schedule.agendas} 
					currentUser={this.props.currentUser}
					style={[GS.themeFont]} />
			)
		})

		return (
			<ScrollableTabView
				tabBarPosition={'top'}
				tabBarUnderlineColor={'#eee'}
				tabBarBackgroundColor={'#d32f2f'}
				tabBarActiveTextColor={'white'}
				tabBarInactiveTextColor={'white'}
				tabBarTextStyle={styles.tabBarText}
				style={styles.tabView}
				>
					{schedules}
			</ScrollableTabView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.schedules.loading,
		schedules: state.schedules.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(scheduleActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedules);

const styles = StyleSheet.create({
	tabView: {
		padding: 0,
		margin: 0,
		backgroundColor: 'white'
	},

	tabBarText: {
		// fontSize: 12,
	},
});