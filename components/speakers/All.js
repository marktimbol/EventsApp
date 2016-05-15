'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	ListView,
	TouchableHighlight,
	ActivityIndicatorIOS,
	StyleSheet,
} from 'react-native';

import Speaker from './Show';
import GS from './../GlobalStyles';
const domain = 'http://mecsc.dev';

class All extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			speakers: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loaded: false
		}

		this.fetchSpeakers = this.fetchSpeakers.bind(this);
	}

	componentDidMount()
	{
		this.fetchSpeakers();
	}

	fetchSpeakers()
	{
		const url = `${domain}/api/public/speakers`;
		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					speakers: this.state.speakers.cloneWithRows(responseData),
					loaded: true,
				})
			})
			.catch((error) => {
				console.warn(error);
			})
			.done();

	}

	render()
	{
		if( ! this.state.loaded )
		{
			return this.loading();
		}

		return (
			<ListView dataSource={this.state.speakers}
				renderRow={this.renderRow.bind(this)}
				style={styles.listView} />
		)
	}

	renderRow(speaker, sectionID, rowID)
	{
		return (
			<TouchableHighlight underlayColor={'#ddd'} onPress={() => this.viewSpeaker(speaker) }>
				<View style={[styles.speaker, GS.separator]}>
					<View style={styles.left}>
						<Image source={require('../../images/avatar.jpg')} style={styles.avatar} />
					</View>

					<View style={styles.right}>
						<View style={styles.info}>
							<Text style={[GS.themeFont, styles.name]}>
								{speaker.name}
							</Text>
							<Text style={[GS.themeFont, GS.body]}>
								{speaker.designation} at {speaker.company}
							</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	viewSpeaker(speaker)
	{
		this.props.navigator.push({
			title: speaker.name,
			component: Speaker,
			passProps: { speaker }
		})
	}

	loading()
	{
		return (
			<View style={GS.loading}>
				<ActivityIndicatorIOS animating={true} size={'large'} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	// listView: {
	// 	padding: 10,
	// },

	speaker: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},

	left: {
		flex: 0.2
	},

	right: {
		flex: 0.8
	},

	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},

	name: {
		fontSize: 11,
		color: '#333',
	}
})

module.exports = All;