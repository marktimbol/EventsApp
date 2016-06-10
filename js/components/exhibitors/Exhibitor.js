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

class Exhibitor extends Component
{
	render()
	{
		let { exhibitor } = this.props;

		return (
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<View style={styles.logoContainer}>
						<Image source={require('../../../images/exhibitor.png')} style={styles.logo} resizeMode={'contain'} />
					</View>
					<Text style={[GS.themeFont, styles.name]}>{ exhibitor.name }</Text>
					<Text style={[GS.themeFont, styles.country]}>Country: { exhibitor.country }</Text>
				</View>

				<View style={styles.actions}>
					<View style={styles.action}>
						<TouchableHighlight style={styles.action__link} underlayColor={'#c62828'} onPress={() => alert('Other action') }>
							<Text style={[GS.themeFont, GS.textCenter, styles.action__label]}>
								Other
							</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.action}>
						<TouchableHighlight style={styles.action__link} underlayColor={'#c62828'} onPress={() => alert('TODO: visit website') }>
							<Text style={[GS.themeFont, GS.textCenter, styles.action__label]}>
								Visit Website
							</Text>
						</TouchableHighlight>
					</View>
				</View>

				<View style={styles.about}>
					<Text style={[GS.themeFont, GS.pageTitle]}>About</Text>
					<Text style={[GS.themeFont, GS.body]}>
						{exhibitor.about}
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
		// backgroundColor: 'white'
	},

	name: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 30,
	},

	country: {
		fontSize: 16,
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

	action__link: {
		padding: 10,
	},

	action__label: {
		color: 'white',
		fontSize: 12,
	},

	about: {
		padding: 20,
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

export default Exhibitor;