import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TodoForm = ({ todos, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = () => {
    const todoExists = todos.some((todo) => todo.title === taskTitle);

    if (todoExists) {
      // Handle the case where the todo already exists (e.g., show an alert)
      Alert.alert('Todo Already Exists', 'Please enter a unique title for the task.');
    } else {
      onAddTask({ title: taskTitle, description: taskDescription });
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Task Description"
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  addButton: {
    backgroundColor: 'pink',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoForm;
