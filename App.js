import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomePage from './HomePage';
import BottomTabs from './navigation/BottomTabs';
import NotificationScreen from './screens/NotificationScreen'; // Import Notification Screen
import ProfileScreen from './screens/ProfileScreen'; // Import Profile Screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'XLAB HomePage' }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ title: 'Welcome Akash' }} />
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{ title: 'Notifications' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
