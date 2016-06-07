import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableHighlight
} from 'react-native';

import { themeColor } from '../../env';
import * as GS from '../GlobalStyles';

class MediaPartner extends Component
{
	render()
	{
		let { media } = this.props;

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<View style={styles.logoContainer}>
						<Image source={require('../../../images/media.jpg')} style={styles.logo} resizeMode={'contain'} />
					</View>
					<Text style={[GS.themeFont, styles.name]}>{ media.name }</Text>
				</View>

				<View style={styles.actions}>
					<View style={styles.action}>
						<TouchableHighlight underlayColor={'#c62828'} onPress={() => alert('Other action') }>
							<Text style={[GS.themeFont, GS.textCenter, styles.actionText]}>
								Other
							</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.action}>
						<TouchableHighlight underlayColor={'#c62828'} onPress={() => alert('TODO: visit website') }>
							<Text style={[GS.themeFont, GS.textCenter, styles.actionText]}>
								Visit Website
							</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.about}>
					<Text style={[GS.themeFont, GS.pageTitle]}>About</Text>
					<Text style={[GS.themeFont, GS.body]}>
						{media.about}
					</Text>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white'
	},

	header: {
		height: 250,
		backgroundColor: themeColor,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},

	logoContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		marginBottom: 15,
	},

	logo: {
		width: 90,
		height: 90,
		borderRadius: 45,
		backgroundColor: 'white'
	},

	name: {
		color: 'white',
		textAlign: 'center',
		marginBottom: 30,
	},

	country: {
		fontSize: 10,
		color: 'white',
		textAlign: 'center'
	},

	actions: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#c62828',
	},

	action: {
		flex: 0.6,
	},

	actionText: {
		color: 'white',
		fontSize: 10,
		padding: 10,
	},

	about: {
		padding: 10,
	},

	title: {
		fontSize: 13,
		marginTop: 20,
		marginBottom: 10,
	},

	body: {
		fontSize: 11,
		color: '#333',
		lineHeight: 16,
	}
})

export default MediaPartner;