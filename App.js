import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthNavigator from './auth.navigator';
import { CtxProvider } from './context';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CtxProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </CtxProvider>
    </QueryClientProvider>
  );
}
