import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => (
  <View>
    <Text>Select Meal Type</Text>
    <Button title="Breakfast" onPress={() => alert('Breakfast items')} />
    <Button title="Lunch" onPress={() => alert('Lunch items')} />
    <Button title="Dinner" onPress={() => alert('Dinner items')} />
    <Button title="Dessert" onPress={() => alert('Dessert items')} />
    <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
  </View>
);

export default MenuScreen;
