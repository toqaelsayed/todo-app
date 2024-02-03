import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const todo = route?.params?.todo;

  if (!todo) {
    return (
      <View>
        <Text>No todo details available.</Text>
      </View>
    );
  }

  return (
    <View  style={styles.container}>
      <Text style={styles.heading}>Todo Details</Text>
      <View style={styles.item}>
        <Text style={styles.title} >{todo.title}</Text>
        <Text >{todo.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#BBE3AC',
    marginVertical: 10,
    marginHorizontal: 10,
    padding:10
  },
});
export default DetailsScreen;
