import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import InputText from '../ui/InputText';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import { apiUrl } from '../../env';

class RequestMeeting extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			duration: '30 minutes',
			message: 'Can we have a meeting?',
		}
	}
	render()
	{
		return (
			<View style={styles.container}>
				<InputText 
					label="Duration"
					value={this.state.duration}
					onChangeText={(text) => this.handleDurationChange(text)} />
				<TextArea 
					label="Message" 
					value={this.state.message}
					onChangeText={(text) => this.handleMessageChange(text)} />
				<View style={styles.separator}></View>
				<Button label="Send" enabled={true} onPress={this.sendRequest.bind(this)} />
			</View>
		)
	}

	handleDurationChange(text)
	{
		console.log('handleDurationChange', text);
		this.setState({ duration: text });
	}

	handleMessageChange(text)
	{
		console.log('handleMessageChange', text);
		this.setState({ message: text })
	}

	sendRequest()
	{
		let { duration, message } = this.state;
		let { currentUser, toUser } = this.props;

		fetch(`${apiUrl}/meetings`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				api_token: currentUser.api_token,
				toUser, when: '', where: '', duration, message
			})
		})
		.then((response) => response.json())
		.then((resposeData) => {
			console.log(resposeData);
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'white'
	},

	separator: {
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ddd'
	}
})

const mapStateToProps = (state) => {
	return {
		currentUser: state.user
	}
}

export default connect(mapStateToProps)(RequestMeeting);