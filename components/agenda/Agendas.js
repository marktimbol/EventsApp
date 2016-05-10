'use strict';

import React, {
	Component,
} from 'react';

import {
	StyleSheet,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import FirstDay from '../../components/FirstDay';
import SecondDay from '../../components/SecondDay';
import ThirdDay from '../../components/ThirdDay';

class Agendas extends Component
{
	render()
	{
		return (
			<ScrollableTabView style={styles.tabView} 
				tabBarPosition={'top'}
				tabBarUnderlineColor={'#ffebee'}
				tabBarBackgroundColor={'#c62828'}
				tabBarActiveTextColor={'white'}
				tabBarInactiveTextColor={'#ddd'}
				tabBarTextStyle={styles.tabBarText}
				>
					<FirstDay tabLabel={'First Day'} navigator={this.props.navigator} />
					<SecondDay tabLabel={'Second Day'} navigator={this.props.navigator} />
					<ThirdDay tabLabel={'Third Day'} navigator={this.props.navigator} />
			</ScrollableTabView>
		)
	}
}

const styles = StyleSheet.create({
	tabView: {
		marginTop: 0,
	},

	tabBarText: {
		fontSize: 12,
	}
});

module.exports = Agendas;