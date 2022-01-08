import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Stack from './stack.nav';
import Tabs from './tabs.nav';

export type RootStackParamList = {
  Stack: undefined;
  Tabs: undefined;
};

const Nav = createNativeStackNavigator<RootStackParamList>();

const LoggedInNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name={'Tabs'} component={Tabs} />
      <Nav.Screen name={'Stack'} component={Stack} />
    </Nav.Navigator>
  );
};

export default LoggedInNav;
