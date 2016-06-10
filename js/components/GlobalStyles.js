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
		fontSize: 18,
		color: '#d32f2f',
		marginBottom: 10,
		// marginVertical: 10,
	},

	subTitle: {
		fontSize: 16,
		color: '#333',
		marginTop: 0,
		marginBottom: 5,
	},

	body: {
		color: '#777',
		fontSize: 14,
		lineHeight: 24,
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
		fontSize: 14,
		color: 'white',
		padding: 5,
		backgroundColor: '#c62828'
	}
});

module.exports = GlobalStyles;