'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import store from '../store';
import AIMCongress from './AIMCongress';

class App extends Component
{
	render() 
	{
		return(
			<Provider store={store}>
				<AIMCongress />
			</Provider>	
		)
	}
}

module.exports = App;