'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	StyleSheet,
	ActivityIndicatorIOS,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Schedule from '../../components/Schedule';

const domain = 'http://mecsc.dev';

class Agendas extends Component
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
			<View style={styles.loading}>
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
				>
					<Schedule tabLabel={'First Day'} 
						schedule={this.state.schedules[0]} 
						navigator={this.props.navigator} />
					<Schedule tabLabel={'Second Day'} 
						schedule={this.state.schedules[1]} 
						navigator={this.props.navigator} />
					<Schedule tabLabel={'Third Day'} 
						schedule={this.state.schedules[2]} 
						navigator={this.props.navigator} />
			</ScrollableTabView>
		)
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	tabBarText: {
		fontSize: 12,
	},
});

module.exports = Agendas;