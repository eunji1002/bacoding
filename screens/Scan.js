import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Audio } from 'expo-av';

const REST_API_KEY = 'f98ace30dbf14b9bbcbc';
const OPENAPI_URL = 'http://openapi.foodsafetykorea.go.kr/api/';

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../assets/Sound/barcode.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.error('사운드 로딩중 에러:', error);
    }
    try {
      const result = await getdata(data);
  
      if (result.error) {
        alert(`Bar code data ${data} has been scanned, but there was an error: ${result.error}`);
      } else {
        alert(`바코드번호 : ${data} \n제품명 : ${result.prnm}\n유통기한 : ${result.deadline}`);
      }
    } catch (error) {
      console.error('식별되지 않는 바코드 번호', error);
    }
    
  };
  
  // API key -> f98ace30dbf14b9bbcbc
  const getdata = async (qrvalue) => {
    const response = await fetch(
        OPENAPI_URL + REST_API_KEY + '/C005/json/1/5/BAR_CD=' +
        qrvalue,
      {
        method: 'GET',
      }
    );
  
    if (response.status === 200) {
      const responseJson = await response.json();
      const prnm = responseJson.C005.row[0].PRDLST_NM;
      const deadline = responseJson.C005.row[0].POG_DAYCNT;
      return { prnm, deadline };
    } else {
      return { error: 'There was an error' };
    }
  };
  
  
  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.scanAgain}>
          <Text>Scan again?</Text>
          <Text style={styles.scanAgainText} onPress={() => setScanned(false)}>
            Tap Here
          </Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  scanAgain: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
  scanAgainText: {
    marginLeft: 10,
    color: 'blue',
  },
});