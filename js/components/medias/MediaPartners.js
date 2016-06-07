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
import * as mediaActionCreators from '../../actions/medias';
import * as GS from '../GlobalStyles';
import { Actions } from 'react-native-router-flux';

class MediaPartners extends Component
{
	render()
	{
		let medias = this.props.medias.map((media, index) => {
			return (
				<TouchableHighlight key={index} underlayColor={'#ddd'} onPress={() => Actions.mediaPartner({ media })}>
					<View style={styles.media}>
						<View style={styles.mediaImage}>
							<Image source={require('../../../images/media.jpg')} style={styles.logo} resizeMode={'contain'} />
						</View>
						<View style={styles.mediaContent}>
							<Text style={GS.subTitle}>
								{ media.name }
							</Text>
						</View>
					</View>
				</TouchableHighlight>
			)
		})

		return (
			<ScrollView style={styles.scrollView}>
				{ medias }
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white'
	},

	media: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
		marginHorizontal: 15,
	},

	mediaImage: {
		flex: 0.2
	},

	logo: {
		width: 50,
		height: 50,
	},

	mediaContent: {
		flex: 0.8,
	}
})

const mapStateToProps = (state) => {
	return {
		medias: state.medias
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(mediaActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaPartners);