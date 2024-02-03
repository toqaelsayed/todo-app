import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const CompletedTodosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Completed Todos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
export default CompletedTodosScreen;
