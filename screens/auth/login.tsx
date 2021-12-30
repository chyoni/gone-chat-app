import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { LoginResponse, userAPI } from '../../api';
import { DARK_GRAY, GREEN, LIGHT_GRAY } from '../../constants';
import { useCtx } from '../../context';
import { ChildrenLoggedNavParamList } from '../../navigators/logged.out.nav';

const Container = styled.KeyboardAvoidingView`
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
  background-color: ${GREEN};
  justify-content: center;
  align-items: center;
`;
const LoginText = styled.Text`
  font-weight: 600;
  color: white;
  font-size: 14px;
`;
const SignupContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SignupText = styled.Text`
  color: white;
  font-weight: 600;
`;
const SignupBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const SignupLink = styled.Text`
  margin-left: 5px;
  color: ${GREEN};
  font-weight: 600;
`;

const Login: React.FC<
  NativeStackScreenProps<ChildrenLoggedNavParamList, 'login'>
> = ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const pwInput = useRef<TextInput>(null);
  const ctx = useCtx();

  const { isLoading, refetch: loginFetch } = useQuery<
    any,
    any,
    LoginResponse,
    string[]
  >(['login', username, password], userAPI.login, {
    enabled: false,
  });

  const onChangeUsernameText = (text: string) => {
    setUsername(text);
  };
  const onChangePasswordText = (text: string) => {
    setPassword(text);
  };
  const onSubmitUsernameEditing = () => {
    pwInput.current?.focus();
  };
  const onSubmitPasswordEditing = async () => {
    if (
      username === '' ||
      username === undefined ||
      password === '' ||
      password === undefined
    ) {
      return Alert.alert('Check login form please.');
    }
    const res = await loginFetch();
    if (res.status === 'success' && res.error === null) {
      return ctx?.setCurrentUser(res.data.token.access_token);
    }
    return Alert.alert(res.error.toString());
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior="padding">
        <LogoContainer>
          <Logo>GoneChat</Logo>
        </LogoContainer>
        <MainContaier>
          <UsernameInput
            value={username}
            placeholder={'Username'}
            returnKeyType={'next'}
            autoCapitalize={'none'}
            textContentType={'username'}
            autoCorrect={false}
            placeholderTextColor={LIGHT_GRAY}
            onChangeText={onChangeUsernameText}
            onSubmitEditing={onSubmitUsernameEditing}
          />
          <PasswordInput
            ref={pwInput}
            value={password}
            placeholder={'Password'}
            returnKeyType={'done'}
            textContentType={'password'}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholderTextColor={LIGHT_GRAY}
            onChangeText={onChangePasswordText}
            onSubmitEditing={onSubmitPasswordEditing}
          />
          <LoginBtn onPress={onSubmitPasswordEditing}>
            <LoginText>
              {isLoading ? <ActivityIndicator color={'white'} /> : 'Log In'}
            </LoginText>
          </LoginBtn>
          <SignupContainer>
            <SignupText>you haven't account? </SignupText>
            <SignupBtn onPress={() => navigate('signup')}>
              <SignupLink>Click here</SignupLink>
            </SignupBtn>
          </SignupContainer>
        </MainContaier>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
