import React from 'react';
import styled from 'styled-components/native';
import { useCtx } from '../../context';

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
  border: 1px solid red;
  margin-top: 50px;
`;
const Logo = styled.Text`
  font-size: 55px;
  font-weight: 600;
  font-family: 'Lobster';
  color: white;
`;
const MainContaier = styled.View`
  flex: 2;
  width: 100%;
  border: 1px solid yellow;
`;
const Text = styled.Text``;

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>GoneChat</Logo>
      </LogoContainer>
      <MainContaier />
    </Container>
  );
};

export default Login;
