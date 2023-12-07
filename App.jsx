import React from 'react';
import { Text, View } from 'react-native';
import { FontsProvider } from './contexts/FontsContext';
import Onboarding from './screens/Onboarding';

export default function App() {
  return (
    <FontsProvider>
      <Onboarding />
    </FontsProvider>
  );
}
