import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {signin} from './signin';
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
 

  const handleLogin = async () => {
    const success = await signin(email, password);
    if (success) {
      navigation.navigate("Home")}
    }
  

return (
    <View style={styles.container}>
      <Text style={styles.heading}>로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        
      />
     <Button title="로그인" onPress={handleLogin} />
    </View>
  );

}

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
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;
