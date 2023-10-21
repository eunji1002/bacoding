import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>스플래시 화면</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("KaKaoLogin", { screen: 'KaKaoLogin' })}
          
        >
          <Image
          style={{
            padding: 10,
            marginTop: "80%",
            width: 200,
            height: 50,
            alignSelf: "center",
            borderRadius: 12,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: '#FEE500',
          }}
          source={require('./src/kakao_login_large_narrow.png')}
          />
         
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