import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
      
      <TouchableOpacity
        onPress={() => navigation.navigate("KaKaoLogin", { screen: 'KaKaoLogin' })}
        style={Styles.buttonContainer}
      >
        <Image
          style={Styles.buttonImage}
          source={require('./src/kakao_login_large_narrow.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login", { screen: 'Login' })}
        style={Styles.NextBottom}
      >
        <Text style={Styles.BottomText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Newaccount", { screen: 'Newaccount' })}
        style={Styles.NextBottom}
      >
        <Text style={Styles.BottomText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { screen: 'Home' })}
        style={Styles.NextBottom}
      >
        <Text style={Styles.BottomText}>홈으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonImage: {
    width: 200,
    height: 50,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FEE500',
  },
  NextBottom: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: "center",
  },
});

export default Splash;
