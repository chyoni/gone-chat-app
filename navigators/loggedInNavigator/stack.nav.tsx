import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { Room } from '../../screens/stacks/room';

export type ChildrenStackParamList = {
  Room: { roomID: number };
};

export type stackScreenProp = NativeStackNavigationProp<any>;

const NativeStack = createNativeStackNavigator<ChildrenStackParamList>();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <NativeStack.Screen name={'Room'} component={Room} />
    </NativeStack.Navigator>
  );
};

export default Stack;
