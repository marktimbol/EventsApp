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
		return (
			<ActivityIndicatorIOS animating={true} size={'large'} color={'white'} />
		)
	}
}

export default Loading;