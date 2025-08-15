import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../../../components/ui/ScreenWrapper';

const Profile = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple', // Alag background color
    justifyContent: 'center', // vertical center
    alignItems: 'center', // horizontal center
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
