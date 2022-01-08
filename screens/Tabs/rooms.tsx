import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components/native';
import { roomAPI, RoomsResponse } from '../../api';
import { RoomCard } from '../../components/room.card';
import { useCtx } from '../../context';

const LoadingContainer = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

export const Rooms = () => {
  const ctx = useCtx();
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { isLoading, data } = useQuery<RoomsResponse>(
    ['rooms', ctx?.me?.id, ctx?.currentUser],
    roomAPI.getRooms
  );
  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(['rooms']);
    setRefreshing(false);
  };

  // data ===>> {"room_id": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]}
  const roomsKeyExtractor = (item: number) => item.toString();

  const roomsRenderItem = ({ item }: { item: number }) => {
    return <RoomCard roomId={item} />;
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={'white'} />
      </LoadingContainer>
    );
  }
  return (
    <FlatList
      data={data?.room_id}
      contentContainerStyle={{
        backgroundColor: 'black',
        flex: 1,
      }}
      onRefresh={onRefresh}
      refreshing={refreshing}
      keyExtractor={roomsKeyExtractor}
      renderItem={roomsRenderItem}
    />
  );
};
