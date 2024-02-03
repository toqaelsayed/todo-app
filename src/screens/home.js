import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, StyleSheet, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleDimensionChange = ({ window }) => {
      Alert.alert(
        'Window Dimensions Changed',
        `Width: ${window.width}, Height: ${window.height}`,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    };

    Dimensions.addEventListener('change', handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  }, []); 
  const addTask = () => {
    if (taskTitle && taskDescription) {
      if (!todos.find((todo) => todo.title === taskTitle)) {
        const newTodo = {
          title: taskTitle,
          description: taskDescription,
          completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTaskTitle('');
        setTaskDescription('');
      } else {
        alert('Todo with the same title already exists!');
      }
    }
  };

  const toggleComplete = (title) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.title === title ? { ...todo, completed: !todo.completed } : todo
      );
      return updatedTodos;
    });

    const completedTodo = todos.find((todo) => todo.title === title && !todo.completed);
    if (completedTodo) {
      setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, completedTodo]);
    }
  };

  const removeTask = (title) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
    setCompletedTodos((prevCompletedTodos) =>
      prevCompletedTodos.filter((todo) => todo.title !== title)
    );
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
          <View style={styles.item}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => toggleComplete(item.title)}>
              <Icon
                name={item.completed ? 'check-circle' : 'circle'}
                size={20}
                color={item.completed ? 'green' : 'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { todo: item })}
              style={styles.contentContainer}
            >
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => removeTask(item.title)}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BBE2EC',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    padding:10

  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default HomeScreen;
