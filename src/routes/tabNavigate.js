import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stackNavigate';
import CompletedTodosScreen from '../screens/completed';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'completed') {
            iconName = focused ? 'check' : 'check';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },headerShown:false
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="completed" component={CompletedTodosScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
