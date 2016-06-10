import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Schedules from './schedules/Schedules';
import Speakers from './speakers/Speakers';
import Threads from './threads/Threads';
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
			<Schedules />
		)
	}
}

export default Home;