import React from 'react';
import {Text, ScrollView, Button, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const SinglePost = (props) => {
  const {item} = props?.route?.params;
  const {goBack} = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <SharedElement id={`${item.id}.image`}>
          <>
            <View>
              <Image
                source={{uri: item.image}}
                style={styles.imageContainer}
                resizeMode="cover"
              />
              {/* The title bugs the transition */}
              {/* <View style={{position: 'absolute', left: 30, bottom: 30}}>
                <Text style={{color: 'white', fontSize: 40}}>{item.title}</Text>
              </View> */}
            </View>
            <View style={styles.closeButton}>
              <Button title="x" onPress={() => goBack()} />
            </View>
          </>
        </SharedElement>
        <Text>{item.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const sharedElements = (route) => {
  const item = route.params.item;

  return [
    {id: `${item.id}.image`},
    // { id: `${item.id}.title`, animation: 'fade' },
    {id: 'close', animation: 'fade-in'},
  ];
};
SinglePost.sharedElements = sharedElements;

export default SinglePost;
