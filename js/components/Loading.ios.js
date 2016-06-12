import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	ActivityIndicatorIOS
} from 'react-native';

class Loading extends Component
{
	render()
	{
		let color = 'white';
		let size = 'large';

		if( this.props.color ) {
			color = this.props.color;
		}

		if( this.props.type ) {
			size = this.props.type.toLowerCase();
		}

		return (
			<ActivityIndicatorIOS animating={true} size={size} color={color} />
		)
	}
}

export default Loading;