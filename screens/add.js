import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Screen1 = () => {

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>바코드 찍고 폼 등록하는 페이지</Text>
    </View>
  )
}

export default Screen1;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 35,
    textAlign: "center",
  },
})