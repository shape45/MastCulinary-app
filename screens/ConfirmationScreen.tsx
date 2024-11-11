import React from 'react';
import { View, Text, Button } from 'react-native';

const ConfirmationScreen = () => (
  <View>
    <Text>Order Confirmed</Text>
    <Text>Thank you for your order!</Text>
    <Button title="Touch ID for Security" onPress={() => alert('Secure with Touch ID')} />
  </View>
);

export default ConfirmationScreen;
