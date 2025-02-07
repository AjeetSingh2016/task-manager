import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, SegmentedButtons } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/taskSlice';

export default function AddEditTaskScreen({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useDispatch();
  const existingTask = route.params?.task;

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setPriority(existingTask.priority.toLowerCase());
    }
  }, [existingTask]);

  const handleSave = () => {
    const taskData = {
      title,
      description,
      priority: priority.toUpperCase()
    };

    if (existingTask) {
      dispatch(editTask({ ...taskData, id: existingTask.id }));
    } else {
      dispatch(addTask(taskData));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.input}
      />
      <SegmentedButtons
        value={priority}
        onValueChange={setPriority}
        buttons={[
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' }
        ]}
        style={styles.priority}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        {existingTask ? 'Update Task' : 'Add Task'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  taskCard: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  input: {
    marginBottom: 16,
  },
  priority: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});