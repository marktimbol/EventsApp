'use strict';

import React, {

} from 'react';

import {
	Component,
	NavigatorIOS,
	StyleSheet,
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import Login from './components/Login';
import PageTitle from './components/PageTitle';
import Menu from './components/ui/Menu';

class App extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			isMenuOpen: false,
			nav: null,
		}

	}

	componentDidMount()
	{
		this.setState({
			nav: this.refs.nav.navigator
		});
	}
	
	closeSidebar()
	{
		this.setState({
			isMenuOpen: false
		});
	}

	render() 
	{
		const menu = <Menu navigator={this.state.nav} 
						closeSidebar={this.closeSidebar.bind(this)} />

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
					navigationBarHidden={false}
					translucent={false}
					ref='nav'
					initialRoute={{
						title: '',
						component: Login,
						passProps: { },
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