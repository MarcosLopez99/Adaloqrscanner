import React, { Component } from 'react'

import {
	StyleSheet,
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
		const {cameraHeight, cameraWidth} = this.props

		return (
			<QRCodeScanner
				onRead={this.onSuccess}
				flashMode={RNCamera.Constants.FlashMode.off}
				containerStyle={styles.container}
				cameraStyle={{height: '100%', width: '100%'}}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%'
	},
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
