import React, {
	Component
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import GS from './GlobalStyles';

class MoreTabs extends Component
{
	render()
	{
		return (
			<ScrollView style={styles.scrollView}>
				<View>
					<Text style={GS.sectionHeader}>More...</Text>

					<TouchableHighlight underlayColor={'#ddd'}
						onPress={Actions.exhibitors}
						style={styles.separator}
					>
						<Text style={styles.link}>Exhibitors</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor={'#ddd'}
						onPress={Actions.mediaPartners}
						style={styles.separator}
					>
						<Text style={styles.link}>Media Partners</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor={'#ddd'}
						onPress={() => console.log('pressed')}
						style={styles.separator}
					>
						<Text style={styles.link}>Venue</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor={'#ddd'}
						onPress={() => console.log('pressed')}
						style={styles.separator}
					>
						<Text style={styles.link}>Contact Us</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({

	scrollView: {
		flex: 1,
		backgroundColor: 'white'
	},

	link: {
		fontSize: 12,
		color: '#333',
		marginVertical: 10,
		marginHorizontal: 15,
	},

	separator: {
	    borderBottomColor: '#ddd',
	    borderBottomWidth: StyleSheet.hairlineWidth
	}
})

export default MoreTabs;