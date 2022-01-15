import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { ChildrenStackParamList } from '../../navigators/loggedInNavigator/stack.nav';

export const Room: React.FC<
  NativeStackScreenProps<ChildrenStackParamList, 'Room'>
> = ({ route: { params }, navigation }) => {
  const roomID = params.roomID;

  return (
    <View>
      <Text style={{ color: 'white' }}>{roomID}</Text>
    </View>
  );
};
