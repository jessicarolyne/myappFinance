import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';

import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import TransactionsScreen from '../components/TransactionsScreen';
import DarkTheme from '../components/themes/appDarkTheme';
import DefaultTheme from '../components/themes/appLightTheme';
import CustomComponent from '../components/CustomComponent';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  const scheme = useColorScheme();
console.log(scheme)
  return (
    <NavigationContainer>
      <Tab.Navigator style={{backgroundColor: scheme === 'dark' ? "#000" : "FFF"}} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transaction" component={TransactionsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
