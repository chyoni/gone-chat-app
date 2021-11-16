import React from 'react';
import styled from 'styled-components/native';
import { useCtx } from '../../context';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const Login = () => {
  return (
    <Container>
      <Text>Login</Text>
    </Container>
  );
};

export default Login;
