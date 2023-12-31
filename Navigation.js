import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from './screens/splash';
import Signup from './screens/signup';
import KaKaoLogin from './screens/kakaoLogin';
import Home from './screens/home';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';

import Search from './screens/search';
import Scan from './screens/Scan';
import Login from './screens/login';
import Newaccount from './screens/newaccount';
import Push from './screens/push';


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Newaccount" component={Newaccount} />
      <Stack.Screen name="KaKaoLogin" component={KaKaoLogin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Scanner" component={Scan} />
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
      <BottomTab.Screen name="푸시 알림" component={Push}
       options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="alarm" color={color} size={30} />
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