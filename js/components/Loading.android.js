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
		return (
			<ProgressBarAndroid />
		)
	}
}

export default Loading;