// src/components/ScreenWrapper.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

interface ScreenWrapperProps extends SafeAreaViewProps {
  children: React.ReactNode;
}

export default function Screen({
  children,
  style,
  ...props
}: ScreenWrapperProps) {
  return (
    <SafeAreaView style={[styles.container, style]} {...props}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
