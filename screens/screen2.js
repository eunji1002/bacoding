import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";
import { signout } from './signout';

const Screen2 = () => {
    const navigation = useNavigation();
    const webViewRef = useRef(null);
    const [webViewVisible, setWebViewVisible] = useState(false);

    const handleSignout = () => {
        signout(); // 로그아웃 함수 호출
        navigation.navigate("Splash", { screen: "Splash" } );
      };

    return (
        <View style={styles.container}>
          <Text style={styles.heading}>파이어베이스 로그아웃</Text>
          <Button title="로그아웃" onPress={handleSignout} />
        </View>
      );

    // const handleLogout = () => {
    //     // Your logout URL logic here
    //     const logoutURL = 'https://kauth.kakao.com/oauth/logout?client_id=e6ff0c1fbb38cce593111186d1af9e72&logout_redirect_uri=http://192.168.35.3:19006/Splash';

    //     const onNavigationStateChange = (navState) => {
    //         // Check if the WebView has navigated to the logout redirect URI
    //         if (navState.url === 'http://192.168.35.3:19006/Splash') {
    //             // You can optionally add a delay here if necessary.
    //             // Simulate a delay and then navigate to the splash screen.
    //             setTimeout(() => {
    //                 setWebViewVisible(false);
    //                 navigation.navigate("Splash"); // Replace "Splash" with your actual screen name
    //             }, 0); // 1000 milliseconds (1 second) delay
    //         }
    //     };

    //     return (
    //         <View style={Styles.container}>
    //             <Button title="카카오 로그아웃" onPress={() => setWebViewVisible(true)} />
    //             {webViewVisible && (
    //                 <WebView
    //                     ref={webViewRef}
    //                     source={{ uri: logoutURL }}
    //                     style={{ marginTop: 10 }}
    //                     onNavigationStateChange={onNavigationStateChange}
    //                 />
    //             )}
    //         </View>
    //     );
    // }
    

    // return (
    //     <View style={Styles.container}>
    //         {handleLogout()}
    //     </View>
    // )

    
}




export default Screen2;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   HomeText: {
//     fontSize: 30,
//     textAlign: "center",
//   },
//   NextBottom: {
//     backgroundColor: "#FEE500",
//     padding: 10,
//     marginTop: "50%",
//     width: 200,
//     height: 50,
//     alignSelf: "center",
//     borderRadius: 12,
//     justifyContent : "center"
//   },
//   BottomText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: 'black',
//     textAlign: "center",
//   }
// })