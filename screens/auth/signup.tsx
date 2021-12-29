import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { userAPI } from '../../api';
import { DARK_GRAY, GREEN, LIGHT_GRAY } from '../../constants';
import { ChildrenLoggedNavParamList } from '../../navigators/logged.out.nav';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: black;
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
const MainContainer = styled.View`
  flex: 4;
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
const SignupBtn = styled.TouchableOpacity`
  width: 80%;
  padding: 15px 13px;
  border-radius: 5px;
  background-color: ${GREEN};
  justify-content: center;
  align-items: center;
`;
const SignupText = styled.Text`
  font-weight: 600;
  color: white;
  font-size: 14px;
`;
const LoginContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const LoginText = styled.Text`
  color: white;
  font-weight: 600;
`;
const LoginBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const LoginLink = styled.Text`
  margin-left: 5px;
  color: ${GREEN};
  font-weight: 600;
`;
const PasswordConfirmInput = styled(PasswordInput)``;
const Alias = styled(UsernameInput)``;

const Signup: React.FC<
  NativeStackScreenProps<ChildrenLoggedNavParamList, 'signup'>
> = ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [alias, setAlias] = useState<string>('');

  const onChangeUsername = (text: string) => {
    setUsername(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };
  const onChangePasswordConfirm = (text: string) => {
    setPasswordConfirm(text);
  };
  const onChangeAlias = (text: string) => {
    setAlias(text);
  };

  const { isLoading, refetch: signupRefetch } = useQuery(
    ['signup', username, password, passwordConfirm, alias],
    userAPI.signup,
    { enabled: false }
  );

  const onSubmitAliasEditing = async () => {
    if (
      username === '' ||
      username === undefined ||
      password === '' ||
      password === undefined ||
      passwordConfirm === '' ||
      passwordConfirm === undefined ||
      alias === '' ||
      alias === undefined
    ) {
      return Alert.alert('Please check sign up form.');
    }
    if (password !== passwordConfirm) {
      return Alert.alert('Please check between password and password confirm.');
    }
    const res = await signupRefetch();
    if (res.error === null && res.status === 'success') {
      return Alert.alert('Signup success', 'go to login 😍', [
        { text: 'OK', onPress: () => navigate('login') },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior="padding">
        <LogoContainer>
          <Logo>GoneChat</Logo>
        </LogoContainer>
        <MainContainer>
          <UsernameInput
            placeholder={'Username'}
            returnKeyType={'next'}
            autoCapitalize={'none'}
            textContentType={'username'}
            autoCorrect={false}
            onChangeText={onChangeUsername}
            placeholderTextColor={LIGHT_GRAY}
          />
          <PasswordInput
            placeholder={'Password'}
            returnKeyType={'next'}
            textContentType={'password'}
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={onChangePassword}
            autoCapitalize={'none'}
            placeholderTextColor={LIGHT_GRAY}
          />
          <PasswordConfirmInput
            placeholder={'Password Confirm'}
            returnKeyType={'next'}
            textContentType={'password'}
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={onChangePasswordConfirm}
            autoCapitalize={'none'}
            placeholderTextColor={LIGHT_GRAY}
          />
          <Alias
            placeholder={'Alias'}
            returnKeyType={'done'}
            autoCapitalize={'none'}
            textContentType={'nickname'}
            autoCorrect={false}
            onChangeText={onChangeAlias}
            placeholderTextColor={LIGHT_GRAY}
            onSubmitEditing={onSubmitAliasEditing}
          />
          <SignupBtn onPress={onSubmitAliasEditing}>
            <SignupText>
              {isLoading ? <ActivityIndicator color={'white'} /> : 'Sign up'}
            </SignupText>
          </SignupBtn>
          <LoginContainer>
            <LoginText>you have already account? </LoginText>
            <LoginBtn onPress={() => navigate('login')}>
              <LoginLink>Click here</LoginLink>
            </LoginBtn>
          </LoginContainer>
        </MainContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
