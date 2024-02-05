// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoForm from '../components/todoForm';
import { useDispatch } from 'react-redux';
import { addCompletedTodo, removeCompletedTodo } from '../redux/slices/slice.completedTodos';
import { addUncompletedTodo, removeUncompletedTodo } from '../redux/slices/slice.uncompletedTodos';

// Define HomeScreen component
const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
  const [alertShown, setAlertShown] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDimensionChange = ({ window }) => {
      if (!alertShown) {
        Alert.alert(
          'Window Dimensions Changed',
          `Width: ${window.width}, Height: ${window.height}`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
        setAlertShown(true);
      }
    };


    Dimensions.addEventListener('change', handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  }, []);

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
    dispatch(addUncompletedTodo(task)); // Dispatch the action to add uncompleted todo to the Redux store
  };

  const toggleComplete = (title) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.title === title ? { ...todo, completed: !todo.completed } : todo
      );
  
      const todoToToggle = updatedTodos.find((todo) => todo.title === title);
  
      if (todoToToggle) {
        if (todoToToggle.completed) {
          // Dispatch the action to remove from uncompleted and add to completed
          dispatch(removeUncompletedTodo(todoToToggle));
          dispatch(addCompletedTodo({ ...todoToToggle, completed: true }));
        } else {
          // Dispatch the action to remove from completed and add to uncompleted
          dispatch(removeCompletedTodo(todoToToggle));
          dispatch(addUncompletedTodo({ ...todoToToggle, completed: false }));
        }
  
        return updatedTodos;
      }
  
      return prevTodos;
    });
  };
  

  const removeTask = (title) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
    dispatch(removeUncompletedTodo({ title })); // Dispatch the action to remove uncompleted todo from the Redux store
    dispatch(removeCompletedTodo({ title })); // Dispatch the action to remove completed todo from the Redux store
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO App</Text>
      <TodoForm todos={todos} onAddTask={addTask} />
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
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default HomeScreen;
