import React from 'react';
import styled from 'styled-components/native';
import { DARK_GRAY, LIGHT_GRAY } from '../../constants';
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
  align-items: center;
`;
const UsernameInput = styled.TextInput`
  width: 80%;
  padding: 15px 13px;
  margin-bottom: 15px;
  background-color: ${DARK_GRAY};
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;
const PasswordInput = styled.TextInput`
  width: 80%;
  padding: 15px 13px;
  margin-bottom: 15px;
  background-color: ${DARK_GRAY};
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;
const LoginBtn = styled.TouchableOpacity`
  width: 80%;
  padding: 15px 13px;
  border-radius: 5px;
  background-color: #289672;
  justify-content: center;
  align-items: center;
`;
const LoginText = styled.Text`
  font-weight: 600;
  color: white;
  font-size: 14px;
`;

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>GoneChat</Logo>
      </LogoContainer>
      <MainContaier>
        <UsernameInput
          placeholder={'Username'}
          placeholderTextColor={LIGHT_GRAY}
        />
        <PasswordInput
          placeholder={'Password'}
          placeholderTextColor={LIGHT_GRAY}
        />
        <LoginBtn>
          <LoginText>Log In</LoginText>
        </LoginBtn>
      </MainContaier>
    </Container>
  );
};

export default Login;
