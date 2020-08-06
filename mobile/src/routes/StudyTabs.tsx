import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons as Icon } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 84 : 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon name="ios-easel" color={focused ? '#8257E5' : color} size={size} />
            );
          }
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon name="ios-heart" color={focused ? '#8257E5' : color} size={size} />
            );
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;