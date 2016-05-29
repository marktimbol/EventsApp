'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	ScrollView,
	ActivityIndicatorIOS,
	StyleSheet,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as speakerActionCreators from '../../actions/speakers';

import SpeakerRow from './SpeakerRow';
import GS from './../GlobalStyles';
const domain = 'http://mecsc.dev';

class Speakers extends Component
{
	componentDidMount()
	{
		this.props.fetchSpeakers();
	}

	render()
	{
		if( this.props.loading ) {
			return this.showLoading();
		}

		let speakers = this.props.speakers.map((speaker, index) => {
			return (
				<SpeakerRow 
					key={index} 
					speaker={speaker} />
			)
		})
		return (
			<ScrollView style={styles.scrollView}>
				{ speakers }
				<View style={styles.footer}></View>
			</ScrollView>
		)
	}

	showLoading()
	{
		return (
			<View style={GS.loading}>
				<ActivityIndicatorIOS animating={true} size={'large'} />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.speakers.loading,
		speakers: state.speakers.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(speakerActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Speakers);

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white'
	},

	footer: {
		height: 60,
	}
})

