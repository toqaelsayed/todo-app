import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stackNavigate'; 
import CompletedTodosScreen from '../screens/completed';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab" component={HomeStack} />
      <Tab.Screen name="completed" component={CompletedTodosScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigator;