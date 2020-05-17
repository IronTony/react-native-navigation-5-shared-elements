import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../scenes/Settings';
import StackScreen from './stackScreens';

const BottomTabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={StackScreen} />
      <BottomTabs.Screen name="Settings" component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
};

export default TabsScreen;
