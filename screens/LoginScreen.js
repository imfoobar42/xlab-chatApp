import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Complete.png')} // Replace with the path to your logo image
        style={styles.logo}
      />
      
      {/* Title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />

      {/* Password Input */}
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background for a modern look
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 30, // Space between logo and inputs
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B008B', // Purple color for the title
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#8B008B', // Purple border
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8B008B', // Purple button
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#8B008B', // Match the purple theme
  },
  signupLink: {
    fontSize: 16,
    color: '#8B008B', // Purple color for the link
    fontWeight: 'bold',
  },
});
