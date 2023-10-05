import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import ActivityScreen from '../screens/activity';
import AccountScreen from '../screens/account';

const TabsNavigator = ({route}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          backgroundColor: '#ADADAD',
        },
        tabBarLabelStyle: { fontSize: 20, fontFamily: 'Barlow-SemiBold' },
        tabBarInactiveTintColor: '#000',
        tabBarLabel: route.name,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{user: route.params.user}}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ tintColor: color, width: 50, height: 50, marginTop: 10 }}
              source={require('../assets/img/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Atividade"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ tintColor: color, width: 50, height: 50, marginTop: 10 }}
              source={require('../assets/img/activity.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ tintColor: color, width: 50, height: 50, marginTop: 10 }}
              source={require('../assets/img/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
