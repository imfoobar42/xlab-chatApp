import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('User signed up with:', name, email, password);
    // Handle signup logic here (API call to register the user)
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Complete.png')} // Replace with your logo
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Signup Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Navigate to Login Page */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Log In</Text>
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
    height: 155,
    marginBottom: 30, // Space between logo and inputs
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B008B', // Purple color for consistency
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
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
    width: '80%',
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
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: '#8B008B', // Purple color for consistency
  },
  loginLink: {
    fontSize: 16,
    color: '#8B008B', // Purple color for the link
    fontWeight: 'bold',
  },
});
