import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../../../components/ui/ScreenWrapper';

const Notes = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Notes</Text>
    </Screen>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green', // Alag background color
    justifyContent: 'center', // vertical center
    alignItems: 'center',     // horizontal center
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
