import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { registration } from './registration';
import { useNavigation } from "@react-navigation/native";
const Newaccount = () => {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  
  const handleSignup = () => {
    registration(nickName, email, password);
    navigation.navigate("Splash", { screen: "Splash" } );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="닉네임"
        onChangeText={(text) => setNickName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="가입하기" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Newaccount;
