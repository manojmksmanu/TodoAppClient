// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
// import { useAuthStore } from '@/store/authStore';

export default function RootNavigator() {
  //   const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return (
    <NavigationContainer>
      {1 === 1 ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
