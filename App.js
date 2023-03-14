import React from 'react';
import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard
  from './components/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './components/Header';
import Footer from './components/Footer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarStyle: { display: "none" },
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home-account" size={30} />
              ),
              tabBarActiveTintColor: '#C16F95',
              tabBarInActiveTintColor: 'gray'
            }}
          />
          <Tab.Screen name="Gameboard" component={Gameboard}
            options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="dice-multiple" size={30} />
            ),
            tabBarActiveTintColor: '#C16F95',
            tabBarInActiveTintColor: 'gray'
            }}
          />
          <Tab.Screen name="Scoreboard" component={Scoreboard}
            options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="format-list-numbered" size={30} />
            ),
            tabBarActiveTintColor: '#C16F95',
            tabBarInActiveTintColor: 'gray'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer />
    </>
  );
}
