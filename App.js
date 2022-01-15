import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Apploading from 'expo-app-loading';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthNavigator from './auth.navigator';
import { CtxProvider } from './context';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './styled';

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

  const isDark = useColorScheme() === 'dark';

  if (!ready) {
    return <Apploading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CtxProvider>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <AuthNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </CtxProvider>
    </QueryClientProvider>
  );
}
