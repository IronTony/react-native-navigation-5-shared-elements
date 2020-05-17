import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Homepage from '../scenes/Home';
import AnotherPage from '../scenes/AnotherPage';

const Stack = createSharedElementStackNavigator({
  name: 'StackScreen',
  debug: true,
});

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerTitleAlign: 'center', // option (center, left) Defaults to center on iOS and left on Android.
        }}
      />
      <Stack.Screen
        name="AnotherPage"
        component={AnotherPage}
        options={{
          headerTitleAlign: 'center', // option (center, left) Defaults to center on iOS and left on Android.
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
