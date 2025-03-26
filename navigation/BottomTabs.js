import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';
import ReviewScreen from '../screens/ReviewScreen';
import HomeScreen from '../screens/HomeScreen';
import DiagramScreen from '../screens/DiagramScreen';
import CustomHeader from '../components/CustomHeader'; // Import Custom Header
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Wrapper for screens inside BottomTabs to include CustomHeader
function ScreenWrapper({ component, title, navigation }) {
  return (
    <>
      <CustomHeader navigation={navigation} title={title} />
      {component}
    </>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Pac.AI') iconName = 'chatbubbles-outline';
          else if (route.name === 'Review') iconName = 'list-circle-outline';
          else if (route.name === 'Diagram') iconName = 'git-compare-outline';
          else if (route.name === 'Home') iconName = 'home-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '##8B008B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hide default header since we are adding CustomHeader manually
      })}
    >
      <Tab.Screen name="Pac.AI">
        {({ navigation }) => <ScreenWrapper component={<ChatScreen />} title="Pac.AI" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Review">
        {({ navigation }) => <ScreenWrapper component={<ReviewScreen />} title="Review" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Diagram">
        {({ navigation }) => <ScreenWrapper component={<DiagramScreen />} title="Diagram" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Home">
        {({ navigation }) => <ScreenWrapper component={<HomeScreen />} title="Home" navigation={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
