import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RoundButton from './RoundButton'; // RoundButton 컴포넌트를 가져옵니다.

const Screen1 = ({ navigation }) => {

  return (
    <View style={Styles.container}>
      <Text style={Styles.HomeText}>+ 버튼 : 바코드 찍는 창으로 넘어감</Text>
      <RoundButton onPress={() => navigation.navigate('Scanner')} />
    </View>
  );
}


export default Screen1;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
});