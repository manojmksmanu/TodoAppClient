import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../../../components/ui/ScreenWrapper';

const AddTask = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Add Task</Text>
    </Screen>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange', // Alag background color
    justifyContent: 'center', // vertical center
    alignItems: 'center', // horizontal center
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
