'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	ListView,
	ActivityIndicatorIOS,
	StyleSheet,
} from 'react-native';

import AgendaRow from './agendas/Row';
import Agenda from './agendas/Show';

class Schedule extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			agendas: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
		}
	}

	componentDidMount()
	{
		this.setState({
			agendas: this.state.agendas.cloneWithRows(this.props.agendas)
		});
	}

	render()
	{
		return (
			<ListView
				dataSource={this.state.agendas}
				renderRow={this.renderRow.bind(this)} 
				style={styles.listView} />
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
			passProps: { agenda, currentUser: this.props.currentUser }
		});
	}
}

const styles = StyleSheet.create({
	listView: {
		paddingTop: 20,
	}
})

module.exports = Schedule;