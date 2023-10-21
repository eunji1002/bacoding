import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import KakaoLoginImage from './assets/kakao_login_large_narrow.png';

const Splash = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>스플래시 화면</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("KaKaoLogin", { screen: 'KaKaoLogin' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>로그인 하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { screen: 'Home' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>홈 화면으로(없앨거임)</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Splash;

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