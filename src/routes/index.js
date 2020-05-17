import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import TabsScreen from './bottomTabs';
import SinglePost from '../scenes/SinglePost';

const RootStack = createSharedElementStackNavigator({
  name: 'RootStack',
});

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      // This gives a sensation of movement on opening
      screenOptions={{
        cardStyleInterpolator: ({current: {progress}}) => {
          const opacity = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          });
          return {cardStyle: {opacity}};
        },
        gestureEnabled: false,
        cardOverlayEnabled: true,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <RootStack.Screen name="Main" component={TabsScreen} />

      <RootStack.Screen name="SinglePost" component={SinglePost} />
    </RootStack.Navigator>
  );
};
