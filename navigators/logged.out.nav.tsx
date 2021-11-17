import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';

const LoggedOutStack = createNativeStackNavigator();

const LoggedOutNav = () => {
  return (
    <LoggedOutStack.Navigator screenOptions={{ headerShown: false }}>
      <LoggedOutStack.Screen name={'login'} component={Login} />
      <LoggedOutStack.Screen name={'signup'} component={Signup} />
    </LoggedOutStack.Navigator>
  );
};

export default LoggedOutNav;
