import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';

export type ChildrenLoggedNavParamList = {
  login: undefined;
  signup: undefined;
};

const LoggedOutStack = createNativeStackNavigator<ChildrenLoggedNavParamList>();

const LoggedOutNav = () => {
  return (
    <LoggedOutStack.Navigator screenOptions={{ headerShown: false }}>
      <LoggedOutStack.Screen name={'login'} component={Login} />
      <LoggedOutStack.Screen name={'signup'} component={Signup} />
    </LoggedOutStack.Navigator>
  );
};

export default LoggedOutNav;
