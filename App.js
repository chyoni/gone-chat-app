import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './auth.navigator';
import { CtxProvider } from './context';

export default function App() {
  return (
    <CtxProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </CtxProvider>
  );
}
