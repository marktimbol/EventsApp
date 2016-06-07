'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	StyleSheet,
	Navigator
} from 'react-native';

import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../components/Login';
import Home from '../components/Home';
import Threads from '../components/threads/Threads';
import Thread from '../components/threads/Thread';
import Schedules from '../components/schedules/Schedules';
import Agenda from '../components/schedules/agendas/Agenda';
import Speakers from '../components/speakers/Speakers';
import Speaker from '../components/speakers/Speaker';
import StartChat from '../components/threads/StartChat';
import Exhibitors from '../components/exhibitors/Exhibitors';
import Exhibitor from '../components/exhibitors/Exhibitor';
import MediaPartners from '../components/medias/MediaPartners';
import MediaPartner from '../components/medias/MediaPartner';

import { themeColor } from '../env';

class AIMCongress extends Component
{	
	render() 
	{
		return (
			<Router 
				navigationBarStyle={styles.router} 
				sceneStyle={styles.scene}
				titleStyle={styles.title}
			>
				<Scene key="root">
					<Scene key="login" component={Login} title="" type="refresh" initial={true} />
					<Scene key="home" component={Home} title="App" type="replace" />
					<Scene key="threads" component={Threads} title="Threads" />
					<Scene key="thread" component={Thread} title="Chat" />
					<Scene key="schedules" component={Schedules} title="Schedules" />
					<Scene key="agenda" component={Agenda} title="Agenda" />
					<Scene key="speakers" component={Speakers} title="Speakers" />
					<Scene key="speaker" component={Speaker} title="Speaker" />
					<Scene key="startChat" component={StartChat} title="Chat" />
					<Scene key="exhibitors" component={Exhibitors} title="Exhibitors" />
					<Scene key="exhibitor" component={Exhibitor} title="Exhibitor" />
					<Scene key="mediaPartners" component={MediaPartners} title="Media Partners" />
					<Scene key="mediaPartner" component={MediaPartner} title="Media Partner" />
				</Scene>
			</Router>
		)
	}
}

const styles = StyleSheet.create({
	router: {
		backgroundColor: themeColor,
		borderBottomWidth: 0,
	},

	scene: {
		paddingTop: 64,
	},

	title: {
		color: 'white'
	}
});

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(AIMCongress);