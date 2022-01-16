import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  NativeModules,
} from 'react-native';
import styled from 'styled-components/native';
import { DARK_GRAY, GREEN } from '../../constants';
import { ChildrenStackParamList } from '../../navigators/loggedInNavigator/stack.nav';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableOpacity } from 'react-native-gesture-handler';

const KeyvoidAvoidContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;
const ChatsContainer = styled.View`
  background-color: ${DARK_GRAY};
  flex: 10;
`;
const InputContainer = styled.View`
  background-color: black;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
`;
const TextInput = styled.TextInput`
  width: 90%;
  padding: 15px 13px;
  background-color: ${DARK_GRAY};
  border-radius: 15px;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const { StatusBarManager } = NativeModules;

export const Room: React.FC<
  NativeStackScreenProps<ChildrenStackParamList, 'Room'>
> = ({ route: { params }, navigation }) => {
  const roomID = params.roomID;

  const [statusBarHeight, setStatusBarHeight] = useState<number | null>();

  useEffect(() => {
    navigation.setOptions({
      title: params.roomID.toString(),
    });
  }, []);
  useEffect(() => {
    const iosStatusBarHeight =
      Platform.OS === 'ios' ? getStatusBarHeight(true) : null;
    setStatusBarHeight(iosStatusBarHeight);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyvoidAvoidContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={statusBarHeight ? statusBarHeight + 48 : 70}
      >
        <ChatsContainer>
          <ScrollView></ScrollView>
        </ChatsContainer>
        <InputContainer>
          <TextInput
            placeholder={'Type Text'}
            returnKeyType={'send'}
            autoCapitalize={'none'}
            textContentType={'none'}
            autoCorrect={false}
          />
          <TouchableOpacity>
            <Ionicons name={'paper-plane'} color={GREEN} size={30} />
          </TouchableOpacity>
        </InputContainer>
      </KeyvoidAvoidContainer>
    </TouchableWithoutFeedback>
  );
};
