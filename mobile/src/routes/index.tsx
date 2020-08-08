import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import { Light, Dark } from '../assets/themes';
import { useThemeContext } from '../contexts/theme';
import AppStack from './AppStack';

function Routes () {
  const { theme, loadTheme } = useThemeContext();

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded || loadTheme) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer theme={ theme === 'light' ? Light as any : Dark as any }>
        <AppStack />
      </NavigationContainer>
    );
  }
}

export default Routes;