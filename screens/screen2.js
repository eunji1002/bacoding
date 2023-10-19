import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";



const Screen2 = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
    <Text style={Styles.HomeText}>로그아웃 화면</Text>
    <TouchableOpacity
        onPress={() => navigation.navigate( "Logout", { screen: "Logout"} )}
        style={Styles.NextBottom}
      >
        <Text style={Styles.BottomText}>로그아웃 화면으로</Text>
      </TouchableOpacity>
  </View>
  )
}

export default Screen2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  NextBottom: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: "center",
  }
})