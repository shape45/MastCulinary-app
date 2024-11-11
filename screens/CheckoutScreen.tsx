import React from 'react';
import { View, Text, Button } from 'react-native';

const CheckoutScreen = ({ navigation }) => (
  <View>
    <Text>Checkout</Text>
    {/* List of items with increase/decrease quantity buttons */}
    <Button title="Confirm Order" onPress={() => navigation.navigate('Payment')} />
  </View>
);

export default CheckoutScreen;
