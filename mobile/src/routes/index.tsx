import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

import { Light, Dark } from '../assets/themes';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer theme={ Light as any }>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Landing"
          component={Landing}
        />
        <Screen
          name="GiveClasses"
          component={GiveClasses}
        />
        <Screen
          name="Study"
          component={StudyTabs}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;