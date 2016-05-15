'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	StyleSheet,
	ActivityIndicatorIOS,
} from 'react-native';

import Store from 'react-native-simple-store';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Schedule from '../../components/Schedule';
import GS from './../GlobalStyles';
const domain = 'http://mecsc.dev';

class All extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			schedules: [],
			loaded: false
		}
	}

	componentDidMount()
	{
		// Store.get('currentUser')
		// 	.then(currentUser => {
		// 		console.log('After Login:', currentUser);
		// 	});

		this.fetchSchedules();
	}

	fetchSchedules()
	{
		const url = `${domain}/api/public/schedules`;

		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					schedules: responseData,
					loaded: true,
				});
			})
			.catch((error) => {
				console.warn(error);
			})
			.done();
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
		if( ! this.state.loaded )
		{
			return this.showLoading();
		}

		return (
			<ScrollableTabView style={styles.tabView} 
				tabBarPosition={'top'}
				tabBarUnderlineColor={'#ffebee'}
				tabBarBackgroundColor={'#c62828'}
				tabBarActiveTextColor={'white'}
				tabBarInactiveTextColor={'#ddd'}
				tabBarTextStyle={styles.tabBarText}
				style={styles.tabBar}
				>
					<Schedule tabLabel={'First Day'} 
						schedule={this.state.schedules[0]} 
						navigator={this.props.navigator}
						style={[GS.themeFont]} />
					<Schedule tabLabel={'Second Day'} 
						schedule={this.state.schedules[1]} 
						navigator={this.props.navigator}
						style={[GS.themeFont]} />
					<Schedule tabLabel={'Third Day'} 
						schedule={this.state.schedules[2]} 
						navigator={this.props.navigator}
						style={[GS.themeFont]} />
			</ScrollableTabView>
		)
	}
}

const styles = StyleSheet.create({
	tabBar: {
		padding: 0,
		margin: 0,
	},

	tabBarText: {
		fontSize: 12,
	},
});

module.exports = All;