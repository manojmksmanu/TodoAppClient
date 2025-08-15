import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../../../components/ui/ScreenWrapper';

const Calendar = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
    </Screen>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Alag background color
    justifyContent: 'center', // vertical center
    alignItems: 'center', // horizontal center
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
