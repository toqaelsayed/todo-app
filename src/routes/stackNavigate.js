import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import CompletedTodosScreen from '../screens/completed';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="completed" component={CompletedTodosScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
