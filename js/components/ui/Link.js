import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

class Link extends Component
{
	render()
	{
		return (
			<TouchableHighlight style={styles.link} underlayColor={'#ddd'} onPress={() => this.props.onPress() }>
				<Text style={styles.label}>{ this.props.label }</Text>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	link: {
		margin: 0,
		padding: 10,
		paddingLeft: 35,
	},

	label: {

	}
})

export default Link;