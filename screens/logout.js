import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";

const INJECTED_JAVASCRIPT = `
  (function() {
    // Find the logout button element by its selector (you need to inspect the button element in the WebView).
    var logoutButton = document.querySelector('#logout-button'); // Replace with the actual selector

    if (logoutButton) {
      logoutButton.click(); // Simulate a click on the logout button
    }
  })();
`;

const Logout = () => {
    const navigation = useNavigation();
    const webViewRef = useRef(null);

    const handleLogout = () => {
        // Your logout URL logic here
        // This example is a placeholder for the actual logout URL.
        const logoutURL = 'https://kauth.kakao.com/oauth/logout?client_id=e6ff0c1fbb38cce593111186d1af9e72&logout_redirect_uri=http://192.168.35.3:19006/Splash';

        return (
            <View style={Styles.container}>
                <WebView
                    ref={webViewRef}
                    source={{ uri: logoutURL }}
                    style={{ marginTop: 10 }}
                    injectedJavaScript={INJECTED_JAVASCRIPT}
                    
                />
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            {handleLogout()}
        </View>
    )
}

export default Logout;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    HomeText: {
        fontSize: 35,
        textAlign: "center",
    },
});
