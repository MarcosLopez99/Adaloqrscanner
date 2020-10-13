import React, { Component } from 'react'

import {
	StyleSheet,
	Text,
	Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera'

class QRScanner extends Component {
	onSuccess = e => {
		Linking.openURL(e.data).catch(err =>
			console.error('An error occured', err)
		);
	};
	render() {
		const { name } = this.props

		return (
			<QRCodeScanner
				onRead={this.onSuccess}
				flashMode={RNCamera.Constants.FlashMode.off}
				topContent={
					<Text style={styles.centerText}>
						Go to{' '}
						<Text style={styles.textBold}>{name}</Text> on
        				your computer and scan the QR code.
					</Text>
				} />
		)
	}
}

const styles = StyleSheet.create({
	centerText: {
		flex: 1,
		fontSize: 18,
		padding: 32,
		color: '#777'
	},
	textBold: {
		fontWeight: '500',
		color: '#000'
	}
})

export default QRScanner
