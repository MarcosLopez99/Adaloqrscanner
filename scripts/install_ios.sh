#!/bin/bash
set -e
set -x

# Dependencies
yarn add react-native-camera@git+https://git@github.com/react-native-community/react-native-camera.git
react-native link react-native-camera
yarn add react-native-qrcode-scanner
yarn add react-native-permissions
react-native link react-native-permissions

#For the rn-camera and rn-permission libraries the react-native link is used, although the new versions of RN come with Auto-linking these libraries do not do the automatic linking

# Podfile
cd ios

sed -i.bak '/RNCPushNotificationIOS/a\
  \  pod "Permission-Camera", :path => "#{permissions_path}/Camera.podspec"
  ' Podfile\

sed -i.bak '/RNCPushNotificationIOS/a\
  \  permissions_path = "../node_modules/react-native-permissions/ios"
  ' Podfile

#In case there is an error when installing the script, change the "" to ''

pod install && cd ..

echo "configured iOS settings"