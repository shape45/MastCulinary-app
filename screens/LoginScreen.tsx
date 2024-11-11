import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Welcome to Culinary Express</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={() => navigation.navigate('Order')} />
      <Button title="Forgot Password?" onPress={() => alert('Redirect to password recovery')} />
    </View>
  );
};

export default LoginScreen;
