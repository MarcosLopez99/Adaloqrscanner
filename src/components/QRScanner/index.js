import React, { Component } from 'react'

import {
	StyleSheet
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera'

class QRScanner extends Component {

	onSuccess = async (value) => {
		const { actions } = this.props

		const qrData = value.data
		const qrRawData = value.rawData

		console.log(qrRawData);
		console.log(qrData);

		if (actions.useActions) await actions.useActions(qrData, qrRawData)
	};

	render() {
		return (
			<QRCodeScanner
				onRead={this.onSuccess}
				flashMode={RNCamera.Constants.FlashMode.off}
				containerStyle={styles.resize}
				cameraStyle={styles.resize}
			/>
		)
	}
}

const styles = StyleSheet.create({
	resize: {
		height: '100%',
		width: '100%',
	}
})

export default QRScanner
