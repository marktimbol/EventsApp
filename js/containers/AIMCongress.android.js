'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	Image,
	DrawerLayoutAndroid,
	TouchableHighlight,
	ScrollView,
	BackAndroid,
	ToastAndroid,
} from 'react-native';

import { themeColor } from '../env';
import AIMCongressRouter from './AIMCongressRouter';
import GS from '../components/GlobalStyles';
import Link from '../components/ui/Link';
import { Actions } from 'react-native-router-flux';

class AIMCongress extends Component
{	
	render() 
	{
		BackAndroid.addEventListener('hardwareBackPress', () => {
	        try {
	            Actions.pop();
	            return true;
	        }
	        catch (err) {
	            ToastAndroid.show("Cannot pop. Exiting the app...", ToastAndroid.SHORT);
	            return true;
	        }
		});

		let navigationView = (
			<ScrollView style={styles.scrollView}>
				<View style={styles.drawer}>
					<View style={styles.drawer__header}>
						<Image source={require('../../images/logo.png')} style={styles.logo} />
						<Text style={[GS.themeFont, styles.date]}>4 - 6 April 2017</Text>
						<Text style={[GS.themeFont, styles.venue]}>
							Dubai International Convention & Exhibition Centre
						</Text>
					</View>

					<View style={styles.drawer__content}>
						<Link label={'Messages'} onPress={() => this.openMessages()} />
						<Link label={'Speakers'} onPress={() => this.openSpeakers()} />
						<Link label={'Sponsors'} onPress={() => alert('TODO')} />
						<Link label={'Exhibitors'} onPress={() => this.openExhibitors()} />
						<Link label={'Media Partners'} onPress={() => this.openMediaPartners()} />
						<Link label={'Venue'} onPress={() => alert('TODO')} />
						<Link label={'FAQs'} onPress={() => alert('TODO')} />
						<Link label={'Contact Us'} onPress={() => alert('TODO')} />
					</View>
				</View>
			</ScrollView>
		)

		return (
			<DrawerLayoutAndroid
				ref="drawer"
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.left}
				renderNavigationView={() => navigationView}>
					<AIMCongressRouter openDrawer={() => this.openDrawer()}/>
			</DrawerLayoutAndroid>
		)
	}

	openDrawer() {
		this.refs.drawer.openDrawer()
	}

	closeDrawer() {
		this.refs.drawer.closeDrawer();
	}

	openMessages()
	{
		this.closeDrawer()
		Actions.threads();
	}

	openSpeakers()
	{
		this.closeDrawer()
		Actions.speakers();
	}

	openExhibitors()
	{
		this.closeDrawer()
		Actions.exhibitors();
	}

	openMediaPartners()
	{
		this.closeDrawer()
		Actions.mediaPartners();
	}
}

const styles = StyleSheet.create({
	title: {
		color: 'white'
	},

	drawer: {

	},

	drawer__header: {
		height: 200,
		padding: 20,
		backgroundColor: themeColor,
		alignItems: 'center',
		justifyContent: 'center'
	},

	drawer__content: {
		marginVertical: 20,
	},

	logo: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},

	date: {
		color: 'white',
		fontSize: 14,
		marginVertical: 10,
		textAlign: 'center',
	},

	venue: {
		color: 'white',
		fontSize: 12,
		textAlign: 'center',
		lineHeight: 20,
	},

	scrollView: {
		// flex: 1,
		// backgroundColor: 'white',
	}
});

export default AIMCongress;