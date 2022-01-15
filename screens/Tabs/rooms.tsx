import React, { useState } from 'react';
import { ActivityIndicator, RefreshControl, Text, View } from 'react-native';
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

const Seperator = styled.View`
  margin-bottom: 10px;
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
      contentContainerStyle={{ paddingHorizontal: 10, marginTop: 10 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ItemSeparatorComponent={() => <Seperator />}
      keyExtractor={roomsKeyExtractor}
      // renderItem이 flex를 가져버리면 안된다. 왜냐하면 처음 렌더할 때 모두 같은 위치에 겹쳐 보이게 된다.
      renderItem={roomsRenderItem}
    />
  );
};
