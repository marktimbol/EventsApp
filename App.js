'use strict';

import React, {
	Component,
} from 'react';

import {
	NavigatorIOS,
	StyleSheet,
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import PageTitle from './components/PageTitle';
import Agendas from './components/agenda/Agendas';
import Menu from './components/ui/Menu';

class App extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			isMenuOpen: false,
		}
	}
	
	render() 
	{
		const menu = <Menu />

		return (
			<SideMenu menu={menu}
				isOpen={this.state.isMenuOpen}
				bounceBackOnOverdraw={false}
			>
				<NavigatorIOS
					barTintColor={'#d32f2f'}
					tintColor={'white'}
					titleTextColor={'white'}
					shadowHidden={true}
					initialRoute={{
						title: 'Agenda',
						component: Agendas,
						passProps: {},
					}} style={styles.route} />
			</SideMenu>
		)
	}
}

const styles = StyleSheet.create({
	route: {
		flex: 1
	},
})

module.exports = App;