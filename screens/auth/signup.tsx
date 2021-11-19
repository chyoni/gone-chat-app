import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { DARK_GRAY, LIGHT_GRAY } from '../../constants';
import { ChildrenLoggedNavParamList } from '../../navigators/logged.out.nav';

const Container = styled.View`
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
const PasswordConfirmInput = styled(PasswordInput)``;
const Alias = styled(UsernameInput)``;

const Signup: React.FC<
  NativeStackScreenProps<ChildrenLoggedNavParamList, 'signup'>
> = ({ navigation }) => {
  return (
    <Container>
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
          placeholderTextColor={LIGHT_GRAY}
        />
        <PasswordInput
          placeholder={'Password'}
          returnKeyType={'next'}
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholderTextColor={LIGHT_GRAY}
        />
        <PasswordConfirmInput
          placeholder={'Password Confirm'}
          returnKeyType={'next'}
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholderTextColor={LIGHT_GRAY}
        />
        <Alias
          placeholder={'Alias'}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          textContentType={'nickname'}
          autoCorrect={false}
          placeholderTextColor={LIGHT_GRAY}
        />
      </MainContainer>
    </Container>
  );
};

export default Signup;
