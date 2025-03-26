

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
      <Text style={styles.boldText}>Sign Up</Text>

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
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>

      {/* Navigate to Login Page */}
      <Button
        title="Already have an account? Log In"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // margin: 49,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 45,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
  },
});
