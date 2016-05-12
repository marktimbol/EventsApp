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
	Dimensions,
} from 'react-native';

import Agendas from '../agenda/Agendas';
import Speakers from '../Speakers';

import Icon from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');

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

				<View style={styles.links}>
					<TouchableHighlight 
						underlayColor={'#ddd'} 
						onPress={this.viewAgendas.bind(this)}
					>
						<View style={styles.link}>
							<Icon name="info-outline" size={24} style={styles.icon} />
							<Text style={styles.label}>Agenda</Text>
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
				</View>
			</View>
		)
	}

	viewAgendas()
	{
		this.props.closeSidebar();

		this.props.navigator.push({
			title: 'Agendas',
			component: Agendas,
			passProps: {}
		});
	}

	viewSpeakers()
	{
		this.props.closeSidebar();

		this.props.navigator.push({
			title: 'Speakers',
			component: Speakers,
			passProps: {}
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
		margin: 20,
		marginLeft: 30,
	},

	link: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
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