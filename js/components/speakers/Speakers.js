'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	ScrollView,
	ActivityIndicatorIOS,
	StyleSheet,
	ListView,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as speakerActionCreators from '../../actions/speakers';

import SpeakerRow from './SpeakerRow';
import GS from './../GlobalStyles';

class Speakers extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			speakers: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			})
		}
	}

	componentDidMount()
	{
		this.setState({
			speakers: this.state.speakers.cloneWithRows(this.props.speakers)
		})
	}

	render()
	{
		return (
			<ListView
				style={styles.listView}
				dataSource={this.state.speakers}
				renderRow={this.renderRow.bind(this)}
				renderSectionHeader={this.renderSectionHeader}
				enableEmptySections={true} />
		)
	}

	renderRow(speaker, sectionID, rowID)
	{
		return (
			<SpeakerRow speaker={speaker} currentUser={this.props.currentUser} />
		)
	}

	renderSectionHeader()
	{
		return (
			<Text style={GS.sectionHeader}>Speakers</Text>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		speakers: state.speakers,
		currentUser: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(speakerActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Speakers);

const styles = StyleSheet.create({
	listView: {
		backgroundColor: 'white'
	},

	sectionHeader: {
		padding: 5,
	}
})

