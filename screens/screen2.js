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
        <Text style={Styles.BottomText}>로그아웃</Text>
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
    backgroundColor: "#FEE500",
    padding: 10,
    marginTop: "50%",
    width: 200,
    height: 50,
    alignSelf: "center",
    borderRadius: 12,
    justifyContent : "center"
  },
  BottomText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    textAlign: "center",
  }
})