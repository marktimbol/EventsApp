import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Navigator,
	Text,
	TouchableHighlight,
	Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Router, Scene } from 'react-native-router-flux';
import Login from '../components/Login';
import Home from '../components/Home';
import Threads from '../components/threads/Threads';
import Thread from '../components/threads/Thread';
import Schedules from '../components/schedules/Schedules';
import Agenda from '../components/schedules/agendas/Agenda';
import Speakers from '../components/speakers/Speakers';
import Speaker from '../components/speakers/Speaker';
import RequestMeeting from '../components/meetings/RequestMeeting';
import StartChat from '../components/threads/StartChat';
import Exhibitors from '../components/exhibitors/Exhibitors';
import Exhibitor from '../components/exhibitors/Exhibitor';
import MediaPartners from '../components/medias/MediaPartners';
import MediaPartner from '../components/medias/MediaPartner';

import { themeColor } from '../env';

class AIMCongressRouter extends Component
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
					{ Platform.OS === 'android' ?
						<Scene key="home" 
							component={Home} 
							title="Conference App" 
							type="replace"
							leftTitle={this.leftTitle()} 
							onLeft={() => this.props.openDrawer()} /> 
							:
						<Scene key="home" 
							component={Home} 
							title="Conference App" 
							type="replace" />
					}
					<Scene key="threads" component={Threads} title="Messages" />
					<Scene key="thread" component={Thread} title="Chat" />
					<Scene key="schedules" component={Schedules} title="Schedules" />
					<Scene key="agenda" component={Agenda} title="Agenda" />
					<Scene key="speakers" component={Speakers} title="Speakers" />
					<Scene key="speaker" component={Speaker} title="Speaker" />
					<Scene key="requestMeeting" component={RequestMeeting} title="Request Meeting" />
					<Scene key="startChat" component={StartChat} title="Chat" />
					<Scene key="exhibitors" component={Exhibitors} title="Exhibitors" />
					<Scene key="exhibitor" component={Exhibitor} title="Exhibitor" />
					<Scene key="mediaPartners" component={MediaPartners} title="Media Partners" />
					<Scene key="mediaPartner" component={MediaPartner} title="Media Partner" />
				</Scene>
			</Router>
		)
	}

	leftTitle()
	{
		return (
			<Icon name="ios-menu" size={30} color="white" style={styles.menu} />
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
		color: 'white',
	},
	menu: {
		// marginTop: 28,
		// marginLeft: 25,
	}
})

export default AIMCongressRouter;