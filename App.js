import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomePage from './HomePage';
import BottomTabs from './navigation/BottomTabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="XLAB" component={HomePage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{title:'XLAB Dashboard'}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
