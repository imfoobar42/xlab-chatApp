import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import ChatScreen from '../screens/ChatScreen';
import PlanScreen from '../screens/PlanScreen';
import HomeScreen from '../screens/HomeScreen';
import DiagramScreen from '../screens/DiagramScreen';
import CustomHeader from '../components/CustomHeader'; // Import the modularized CustomHeader

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Pac.AI') iconName = 'chatbubbles-outline';
          else if (route.name === 'Plan') iconName = 'list-circle-outline';
          else if (route.name === 'Diagram') iconName = 'git-compare-outline';
          else if (route.name === 'Home') iconName = 'home-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        header: (props) => <CustomHeader {...props} />, // Use the modularized CustomHeader
      })}
    >
      <Tab.Screen name="Pac.AI" component={ChatScreen} />
      <Tab.Screen name="Plan" component={PlanScreen} />
      <Tab.Screen name="Diagram" component={DiagramScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
