import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';
import PlanScreen from '../screens/PlanScreen';
import HomeScreen from '../screens/HomeScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ExpertScreen from '../screens/ExpertScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Pac.AI') iconName = 'chatbubbles-outline';
          else if (route.name === 'Plan') iconName = 'calendar-outline';
          else if (route.name === 'Progress') iconName = 'bar-chart-outline';
          else if (route.name === 'Expert') iconName = 'person-outline';
          else if (route.name === 'Home') iconName = 'home-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Pac.AI" component={ChatScreen} />
      <Tab.Screen name="Plan" component={PlanScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Expert" component={ExpertScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
