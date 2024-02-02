import React from 'react';
import { Text, View } from 'react-native';

const DetailsScreen = ({ route }) => {
  const todo = route?.params?.todo;

  if (!todo) {
    // Handle the case where todo is undefined
    return (
      <View>
        <Text>No todo details available.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Todo Details</Text>
      <Text>{todo.title}</Text>
      <Text>{todo.description}</Text>
    </View>
  );
};

export default DetailsScreen;
