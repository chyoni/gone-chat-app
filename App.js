import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Apploading from 'expo-app-loading';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthNavigator from './auth.navigator';
import { CtxProvider } from './context';

const queryClient = new QueryClient();

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [ready, setReady] = useState(false);

  const preload = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };

  useEffect(() => {
    try {
      preload();
      setReady(true);
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!ready) {
    return <Apploading />;
  }

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
