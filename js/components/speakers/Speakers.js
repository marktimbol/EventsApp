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
				contentContainerStyle={styles.listView}
				dataSource={this.state.speakers}
				renderRow={this.renderRow.bind(this)}
				enableEmptySections={true} />
		)
	}

	renderRow(speaker, sectionID, rowID)
	{
		return (
			<SpeakerRow speaker={speaker} currentUser={this.props.currentUser} />
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
		flexWrap: 'wrap',
		flexDirection: 'row',
		backgroundColor: '#f4f4f4',
	},
})

