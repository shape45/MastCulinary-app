import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const PaymentScreen = ({ navigation }) => (
  <View>
    <Text>Payment</Text>
    <TextInput placeholder="Card Number" />
    <TextInput placeholder="Expiration Date" />
    <TextInput placeholder="CVV" />
    <TextInput placeholder="Delivery Address" />
    <Button title="Pay Now" onPress={() => navigation.navigate('Confirmation')} />
  </View>
);

export default PaymentScreen;
