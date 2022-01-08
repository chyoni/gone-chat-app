import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from '../../screens/tabs/home';
import { Ionicons } from '@expo/vector-icons';
import { DARK_GRAY } from '../../constants';
import { Rooms } from '../../screens/tabs/rooms';
import { Me } from '../../screens/tabs/me';

export type ChildrenTabsParamList = {
  Home: undefined;
  Rooms: undefined;
  Me: undefined;
};

const Tab = createBottomTabNavigator<ChildrenTabsParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', color: 'white' },
        headerStyle: {
          backgroundColor: DARK_GRAY,
        },
        headerTitleStyle: { color: 'white' },
        tabBarStyle: {
          backgroundColor: DARK_GRAY,
          borderTopWidth: 1,
          borderTopColor: DARK_GRAY,
        },
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={'white'}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Rooms'}
        component={Rooms}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'paper-plane' : 'paper-plane-outline'}
                color={'white'}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Me'}
        component={Me}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={'white'}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
