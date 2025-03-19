import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

// Ensure LoginScreen is already imported in the App.js
// import LoginScreen from './screens/LoginScreen';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to</Text>
      <Text style={styles.boldText}>AI for Behavior</Text>
      
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')} // Navigation to LoginScreen
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', // Changed to center the content
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 45,
    marginBottom: 20, // Added margin to space out the button
  },
});
