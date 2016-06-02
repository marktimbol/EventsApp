'use strict';

import {
	StyleSheet
} from 'react-native';

import { themeColor } from '../env';

const GlobalStyles = StyleSheet.create({
	themeFont: {
		fontFamily: 'Lato-Regular',
	},

	themeFontLight: {
		fontFamily: 'Lato-Light'
	},

	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	pageTitle: {
		fontSize: 13,
		color: '#d32f2f',
		marginVertical: 10,
	},

	subTitle: {
		fontSize: 11,
		color: '#555',
		marginTop: 0,
	},

	body: {
		color: '#888',
		fontSize: 10,
		lineHeight: 13,
	},

	textMuted: {
		color: '#888',
		fontSize: 11,
	},

	separator: {
		paddingVertical: 10,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},

	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},

	textCenter: {
		textAlign: 'center',
	},

	sectionHeader: {
		fontSize: 10,
		color: 'white',
		padding: 5,
		backgroundColor: '#333'
	}
});

module.exports = GlobalStyles;