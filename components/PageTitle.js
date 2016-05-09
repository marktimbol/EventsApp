'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

class PageTitle extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<View>
				<Text>
					{this.props.title}
				</Text>
			</View>
		)
	}
}

module.exports = PageTitle;