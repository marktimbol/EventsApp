import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exhibitorActionCreators from '../../actions/exhibitors';
import * as GS from '../GlobalStyles';
import { Actions } from 'react-native-router-flux';

class Exhibitors extends Component
{
	render()
	{
		let exhibitors = this.props.exhibitors.map((exhibitor, index) => {
			return (
				<TouchableHighlight key={index} underlayColor={'#ddd'} onPress={() => Actions.exhibitor({ exhibitor })}>
					<View style={styles.exhibitor}>
						<View style={styles.exhibitorImage}>
							<Image source={require('../../../images/exhibitor.png')} style={styles.logo} resizeMode={'contain'} />
						</View>
						<View style={styles.exhibitorContent}>
							<Text style={GS.subTitle}>
								{ exhibitor.name }
							</Text>
							<Text style={GS.body}>
								Country: { exhibitor.country }
							</Text>
							<Text style={GS.body}>
								Stand Number: { exhibitor.standNumber }
							</Text>
						</View>
					</View>
				</TouchableHighlight>
			)
		})

		return (
			<ScrollView style={styles.scrollView}>
				{ exhibitors }
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white'
	},

	exhibitor: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
		marginHorizontal: 15,
	},

	exhibitorImage: {
		flex: 0.2
	},

	logo: {
		width: 50,
		height: 50,
	},

	exhibitorContent: {
		flex: 0.8,
	}
})

const mapStateToProps = (state) => {
	return {
		exhibitors: state.exhibitors
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(exhibitorActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitors);