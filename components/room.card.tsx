import React from 'react';
import { Text, View } from 'react-native';

interface IRoomCard {
  roomId: number;
}

export const RoomCard: React.FC<IRoomCard> = ({ roomId }) => {
  return (
    <View>
      <Text style={{ color: 'white' }}>{roomId}</Text>
    </View>
  );
};
