'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	TouchableHighlight,
	NavigatorIOS,
	StyleSheet,
	ScrollView,
	Dimensions,
} from 'react-native';

import Store from 'react-native-simple-store';

import Messages from '../messages/All';
import Agendas from '../agendas/All';
import Speakers from '../speakers/All';

import Login from '../Login';

import Icon from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');

var apiToken = '';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			infoIcon: null,
		}
	}
	
	componentWillMount() {
		Icon.getImageSource('info', 24)
			.then( (response) => this.setState({ infoIcon: response }) );
	}

	componentDidMount()
	{
		// this.setCurrentUser();
	}

	render() {
		if( ! this.state.infoIcon ) {
			return false;
		}

		var logoContainerWidth = {
			width: width / 1.5,
		}

		return (
			<View style={styles.menu}>
				<View style={[styles.logoContainer, logoContainerWidth]}>
					<Image 
						source={ require('../../images/avatar.jpg') } 
						style={styles.logo} />
				</View>	

				<ScrollView>
					<View style={styles.links}>
						<TouchableHighlight 
							underlayColor={'#ddd'} 
							onPress={this.viewMessages.bind(this)}
						>
							<View style={styles.link}>
								<Icon name="info-outline" size={24} style={styles.icon} />
								<Text style={styles.label}>Messages</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight 
							underlayColor={'#ddd'} 
							onPress={this.viewAgendas.bind(this)}
						>
							<View style={styles.link}>
								<Icon name="info-outline" size={24} style={styles.icon} />
								<Text style={styles.label}>Agendas</Text>
							</View>
						</TouchableHighlight>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Workshop</Text>
						</View>
						<TouchableHighlight 
							underlayColor={'#ddd'} 
							onPress={this.viewSpeakers.bind(this)}
						>
							<View style={styles.link}>
								<Icon name="info-outline" size={24} style={styles.icon} />
								<Text style={styles.label}>Speakers</Text>
							</View>
						</TouchableHighlight>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Exhibitors</Text>
						</View>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Sponsors</Text>
						</View>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Media Partners</Text>
						</View>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Visitors</Text>
						</View>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Venue</Text>
						</View>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Contact Us</Text>
						</View>
						<TouchableHighlight 
							underlayColor={'#ddd'}
							onPress={this.logout.bind(this)}
						>
							<View style={styles.link}>
								<Icon name="info-outline" size={24} style={styles.icon} />
								<Text style={styles.label}>Logout</Text>
							</View>
						</TouchableHighlight>
					</View>
				</ScrollView>
			</View>
		)
	}

	viewMessages()
	{
		this.props.closeSidebar();
		
		Store.get('currentUser')
			.then((currentUser) => {
				this.props.navigator.replace({
					title: 'Messages',
					component: Messages,
					passProps: { currentUser }
				});
			});
	}

	viewAgendas()
	{
		this.props.closeSidebar();
		
		Store.get('currentUser')
			.then((currentUser) => {
				this.props.navigator.replace({
					title: 'Agendas',
					component: Agendas,
					passProps: { currentUser }
				});
			});			
	}

	viewSpeakers()
	{
		this.props.closeSidebar();

		Store.get('currentUser')
			.then((currentUser) => {
				this.props.navigator.replace({
					title: 'Speakers',
					component: Speakers,
					passProps: { currentUser }
				});
			});		
	}

	logout()
	{
		this.props.closeSidebar();

		Store.get('currentUser')
			.then((currentUser) => {
				Store.delete('currentUser');
				this.props.navigator.replace({
					title: '',
					component: Login,
					passProps: {}
				});
			});
	}
}

const styles = StyleSheet.create({

	menu: {
		flex: 1,
	},

	logoContainer: {
		height: 120,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#212121',
	},

	logo: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},

	links: {
		marginTop: 20,
	},

	link: {
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},

	label: {
		fontSize: 10,
		color: '#888',
	},

	icon: {
		color: '#888',
		marginRight: 10,
	}
});

module.exports = Menu;