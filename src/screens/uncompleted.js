// CompletedTasks.js
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { removeUncompletedTodo } from '../redux/slices/slice.uncompletedTodos'; // Import the action

const ToDoComponent = () => {
    const uncompletedTodos = useSelector((state) => state.uncompletedTodo.uncompletedTodos);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>uncompleted Todos</Text>
      {uncompletedTodos.length > 0 ? (
        <FlatList
          data={uncompletedTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <Text>No completed tasks available.</Text>
      )}
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
  item: {
    backgroundColor: '#BBE3AC',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
});

export default ToDoComponent;
