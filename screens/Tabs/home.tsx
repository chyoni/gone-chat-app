import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { DARK_GRAY } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;
const LogoContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Logo = styled.Text`
  font-size: 55px;
  font-weight: 600;
  font-family: 'Lobster';
  color: white;
  margin-bottom: 30px;
`;
const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const GuideText = styled.Text`
  color: white;
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;

export const Home = () => {
  return (
    <Container>
      <MainContainer>
        <Logo>Gone Chat</Logo>
        <Ionicons name={'paper-plane'} color={'white'} size={80} />
        <GuideText>
          {"Welcome GoneChat! \n Let's go chat with your friends."}
        </GuideText>
      </MainContainer>
    </Container>
  );
};
