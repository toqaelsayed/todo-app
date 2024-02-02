import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [todos, setTodos] = useState("");
  const addTask = () => {
    if (taskTitle && taskDescription) {
      const newTodo = {
        title: taskTitle,
        description: taskDescription,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTaskTitle('');
      setTaskDescription('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO App</Text>
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
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Details', { todo: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />
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
    marginHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#BBE2EC',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
