import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TabBarIOS
} from 'react-native';

import Schedules from './schedules/Schedules';
import Speakers from './speakers/Speakers';
import Threads from './threads/Threads';
import MoreTabs from './MoreTabs';
import Icon from 'react-native-vector-icons/Ionicons'

import { themeColor } from '../env'

class Home extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			selectedTab: ''
		}
	}

	componentDidMount()
	{
		this.setState({
			selectedTab: 'schedules'
		})
	}

	render()
	{
		return (
			<TabBarIOS
				tintColor={'white'}
				unselectedTintColor={'#eee'}
				barTintColor={'#333'}
			>
				<Icon.TabBarItemIOS
					title="Schedule"
					iconName="ios-calendar-outline"
					selected={this.state.selectedTab === 'schedules'}
					onPress={() => this.setState({ selectedTab: 'schedules' })}
				>
					<Schedules />
				</Icon.TabBarItemIOS>
				<Icon.TabBarItemIOS
					title="Speakers"
					iconName="ios-people-outline"
					selected={this.state.selectedTab === 'speakers'}
					onPress={() => this.setState({ selectedTab: 'speakers' })}
				>
					<Speakers />
				</Icon.TabBarItemIOS>
				<Icon.TabBarItemIOS
					title="Messages"
					badge={2}
					iconName="ios-chatbubbles-outline"
					selected={this.state.selectedTab === 'messages'}
					onPress={() => this.setState({ selectedTab: 'messages' })}
				>
					<Threads />
				</Icon.TabBarItemIOS>

				<Icon.TabBarItemIOS
					title="Notifications"
					iconName="ios-notifications-outline"
					selected={this.state.selectedTab === 'notifications'}
					onPress={() => this.setState({ selectedTab: 'notifications' })}
				>
					<View>
						<Text>Notifications</Text>
					</View>
				</Icon.TabBarItemIOS>
				<Icon.TabBarItemIOS
					title="More"
					iconName="ios-more-outline"
					selected={this.state.selectedTab === 'more'}
					onPress={() => this.setState({ selectedTab: 'more' })}
				>
					<MoreTabs />
				</Icon.TabBarItemIOS>
			</TabBarIOS>
		)
	}
}

export default Home;