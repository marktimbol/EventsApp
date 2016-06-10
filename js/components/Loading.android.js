import React, {
	Component
} from 'react';

import {
	View,
	StyleSheet,
	ProgressBarAndroid,
} from 'react-native';

class Loading extends Component
{
	render()
	{
		let type = 'Normal';
		let color = 'white';
		if( this.props.type ) {
			type = this.props.type;
		}
		if( this.props.color ) {
			color = this.props.color;
		}


		return (
			<ProgressBarAndroid styleAttr={type} color={color} />
		)
	}
}

export default Loading;