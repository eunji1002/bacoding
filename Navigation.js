import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from './screens/splash';
import Signin from './screens/signin';
import Signup from './screens/signup';
import KaKaoLogin from './screens/kakaoLogin';
import Home from './screens/home';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Logout from './screens/logout';
import Search from './screens/search';


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="KaKaoLogin" component={KaKaoLogin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Home" component={BottomStack} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomStack() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="상품 검색" component={Search}
       options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="text-search" color={color} size={30} />
        ),
      }} />
      <BottomTab.Screen name="상품 정보 " component={Screen1}
       options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={30} />
        ),
      }} />
      <BottomTab.Screen name="로그아웃" component={Screen2}
       options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog" color={color} size={30} />
        ),
      }} />
    </BottomTab.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen>
        <BottomStack />
      </StackScreen>
    </NavigationContainer>
  );
}

export default Navigation;