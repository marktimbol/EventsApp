'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	StyleSheet,
	ScrollView,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import AgendaRow from './AgendaRow';

class Agendas extends Component
{
	render()
	{
		let agendas = this.props.agendas.map((agenda, index) => {
			return (
				<AgendaRow 
					key={index}
					agenda={agenda} 
					onPress={() => this.viewAgenda(agenda)} />
			)
		})
		return (
			<ScrollView style={styles.scrollView}>
				{agendas}
				<View style={styles.footer}></View>
			</ScrollView>
		)
	}

	viewAgenda(agenda)
	{
		Actions.agenda({ agenda });		
	}
}

const styles = StyleSheet.create({
	scrollView: {
		paddingTop: 20,
		backgroundColor: 'white',
	},

	footer: {
		height: 50,
	}
})

module.exports = Agendas;