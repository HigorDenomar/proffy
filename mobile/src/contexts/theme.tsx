import React from 'react';
import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';

interface ThemeContextData {
 theme: string;
 loadTheme: boolean;
 toggleTheme(): Promise<void>;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [loadTheme, setLoadTheme] = useState<boolean>(true);

  async function loadStorageData() {
    const storagedTheme = await AsyncStorage.getItem('@RNTheme');

    if(storagedTheme) {
      setTheme(storagedTheme);
    } else {
      await AsyncStorage.setItem('@RNTheme', 'light');
    }

    setLoadTheme(false);
  }

  async function toggleTheme () {
    await AsyncStorage.setItem('@RNTheme', theme === "dark" ? "light" : "dark");

    loadStorageData();
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, loadTheme}}>
      { children }
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  return context;
}