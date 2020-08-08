import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppStack from './src/routes';
import { ThemeProvider } from './src/contexts/theme';

export default function App() {
  return (
    <ThemeProvider>
      <AppStack />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
