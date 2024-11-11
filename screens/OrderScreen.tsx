import React from 'react';
import { View, Text, Button } from 'react-native';

const OrderScreen = ({ navigation }) => (
  <View>
    <Text>Select Your Order</Text>
    <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
    <Button title="Favorites" onPress={() => alert('Favorites feature')} />
    <Button title="Locate New Menus" onPress={() => alert('Locate feature')} />
  </View>
);

export default OrderScreen;
