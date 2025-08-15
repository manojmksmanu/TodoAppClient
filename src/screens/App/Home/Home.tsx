import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../../../components/ui/ScreenWrapper';

const Home = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center', // vertical center
    alignItems: 'center',     // horizontal center
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
