'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	ListView,
	StyleSheet,
} from 'react-native';

import AgendaRow from './agenda/AgendaRow';
import Agenda from './agenda/Agenda';

class ThirdDay extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			agendas: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			eventDate: '',
			loaded: false,
		}
	}

	componentDidMount()
	{
		this.fetchAgenda();
	}

	fetchAgenda()
	{
		const url = 'http://mecsc.dev/api/public/schedules/3';

		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					agendas: this.state.agendas.cloneWithRows(responseData.agendas),
					eventDate: responseData.eventDate,
					loaded: true,
				})
			})
	}

	render()
	{
		return (
			<ListView 
				dataSource={this.state.agendas}
				renderRow={this.renderRow.bind(this)}
				renderSectionHeader={this.renderHeader.bind(this)}
				renderFooter={this.renderFooter} />
		)
	}

	renderRow(agenda, sectionID, rowID)
	{
		return (
			<AgendaRow 
				agenda={agenda} 
				onPress={() => this.viewAgenda(agenda)}
				toggleCheck={() => this.toggleCheck(agenda)} />
		)
	}

	viewAgenda(agenda)
	{
		this.props.navigator.push({
			title: agenda.title,
			component: Agenda,
			passProps: { agenda: agenda }
		});
	}

	toggleCheck(agenda)
	{
		alert('Third day I will attend');
	}

	renderHeader()
	{
		return (
			<View></View>
		)
	}

	renderFooter()
	{
		return (
			<View></View>
		)
	}
}

module.exports = ThirdDay;