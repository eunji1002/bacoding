import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
    const navigation = useNavigation();
    const webViewRef = useRef(null);
    const [webViewVisible, setWebViewVisible] = useState(false);

    const handleLogout = () => {
        // Your logout URL logic here
        const logoutURL = 'https://kauth.kakao.com/oauth/logout?client_id=e6ff0c1fbb38cce593111186d1af9e72&logout_redirect_uri=http://192.168.35.3:19006/Splash';

        const onNavigationStateChange = (navState) => {
            // Check if the WebView has navigated to the logout redirect URI
            if (navState.url === 'http://192.168.35.3:19006/Splash') {
                // You can optionally add a delay here if necessary.
                // Simulate a delay and then navigate to the splash screen.
                setTimeout(() => {
                    setWebViewVisible(false);
                    navigation.navigate("Splash"); // Replace "Splash" with your actual screen name
                }, 1000); // 1000 milliseconds (1 second) delay
            }
        };

        return (
            <View style={Styles.container}>
                <Button title="로그아웃" onPress={() => setWebViewVisible(true)} />
                {webViewVisible && (
                    <WebView
                        ref={webViewRef}
                        source={{ uri: logoutURL }}
                        style={{ marginTop: 10 }}
                        onNavigationStateChange={onNavigationStateChange}
                    />
                )}
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            {handleLogout()}
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