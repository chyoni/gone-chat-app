import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { DARK_GRAY, GREEN } from '../constants';
import { stackScreenProp } from '../navigators/loggedInNavigator/stack.nav';

interface IRoomCard {
  roomId: number;
}

const Container = styled.View`
  padding: 20px 10px;
  border: 1px solid white;
  border-radius: 15px;
`;

export const RoomCard: React.FC<IRoomCard> = ({ roomId }) => {
  const navigation = useNavigation<stackScreenProp>();
  const goToRoom = () => {
    navigation.navigate('Stack', {
      screen: 'Room',
      params: { roomID: roomId },
    });
  };

  return (
    <TouchableOpacity onPress={goToRoom}>
      <Container>
        <Text style={{ color: 'white' }}>{roomId}</Text>
      </Container>
    </TouchableOpacity>
  );
};
