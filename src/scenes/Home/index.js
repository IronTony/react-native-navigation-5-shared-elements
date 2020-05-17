import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <Text>Welcome to Homepage</Text>
      <Button
        onPress={() => navigate('AnotherPage')}
        title="Go to inner page"
      />
    </SafeAreaView>
  );
};

export default Home;
