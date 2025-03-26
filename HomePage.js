import React from 'react';
import { Button, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Ensure LoginScreen is already imported in the App.js
// import LoginScreen from './screens/LoginScreen';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Welcome text */}
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.boldText}>AI for Behavior</Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* StatusBar */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background for a clean feel
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically and horizontally
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#8B008B', // Purple text color for consistency
  },
  boldText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#8B008B', // Purple color for the title
    marginBottom: 40, // Space out the button
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8B008B', // Purple button color
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff', // White text on purple background
    fontSize: 18,
    fontWeight: 'bold',
  },
});
