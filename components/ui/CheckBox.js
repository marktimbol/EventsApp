'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class CheckBox extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {}
	}

	render()
	{
		return (
			<TouchableHighlight 
				underlayColor={'transparent'} 
				onPress={this.props.onPress}
			>
				<View style={styles.centered}>
					<Icon name={'ios-checkmark'} 
						size={30} 
						color={'#333'} />
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

module.exports = CheckBox;