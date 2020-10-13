#!/bin/bash
set -e
set -x

# Dependencies
yarn add react-native-camera@git+https://git@github.com/react-native-community/react-native-camera.git
yarn add react-native-qrcode-scanner
yarn add react-native-permissions

sed -i.bak '/defaultConfig {/a\
\     missingDimensionStrategy 'react-native-camera', 'general'
' android/app/build.gradle

echo "configured Android settings"