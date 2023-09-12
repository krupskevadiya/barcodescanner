import React, {useState, useEffect} from 'react';
import {
  DeviceEventEmitter,
  PermissionsAndroid,
  SafeAreaView,
  NativeModules,
  Text,
  View,
} from 'react-native';
import {printLog} from './src/Utils/printLog';
import {styles} from './src/style';
import strings from './src/Utils/strings';
import {TextField} from './src/Component/TextField';
import {CustomButton} from './src/Component/CustomButton';

const {ScannerModule} = NativeModules;

export default function App() {
  const [resultText, setResultText] = useState('yuyiyui');
  const [isScanned, setIsScanned] = useState(false);
  const [statusText, setStatusText] = useState(strings.initializingText);

  useEffect(() => {
    checkCameraPermission(1);
  }, []);

  DeviceEventEmitter.addListener('onBarcodeScanned', data => {
    //Catch result of scanned data here
    printLog('======Data received from Native:=======', data);
    setResultText(data);
    setIsScanned(true);
    setStatusText('');
  });
  const startScanning = from => {
    //Call Native Module from here
    printLog('=====from====' + from);
    setStatusText(strings.initializingText);
    setIsScanned(false);
    setResultText('');
    ScannerModule.scanBarcode();
  };

  async function checkCameraPermission() {
    //Check permission to use device camera
    try {
      const cameraPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED) {
        startScanning(1);
      } else {
        requestCameraPermission();
      }
    } catch (error) {
      setIsScanned(false);
      setStatusText(strings.scanError);
      setResultText('');
      printLog('Error checking camera permission:' + error);
    }
  }

  const requestCameraPermission = async () => {
    //Ask user to grant required permission
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        startScanning(2);
      } else {
        setStatusText(strings.permissionRequire);
        setIsScanned(false);
        setResultText('');
      }
    } catch (err) {
      printLog('=======Camera permissions error======' + err);
      setStatusText(strings.permissionRequire);
      setIsScanned(false);
      setResultText('');
    }
  };
  function onReScan() {
    //clear data and send to rescan
    setIsScanned(false);
    setResultText('');
    setStatusText(strings.initializingText);
    startScanning(3);
  }
  //render view based on conditions
  return (
    <SafeAreaView style={styles.container}>
      {!isScanned ? (
        <View style={styles.initializeView}>
          <Text style={styles.initializeText}>{statusText}</Text>
        </View>
      ) : (
        <View style={styles.resultView}>
          <TextField
            lableStyle={styles.resultLable}
            valueStyle={styles.resultValue}
            lable={strings.scanLable}
            value={resultText}></TextField>

          <CustomButton
            onButtonClick={() => {
              onReScan();
            }}
            buttonStyle={styles.buttonStyle}
            buttonLable={strings.reScan}
            buttonTextStyle={styles.buttonText}></CustomButton>
        </View>
      )}
    </SafeAreaView>
  );
}
