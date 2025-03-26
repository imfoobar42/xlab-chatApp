import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

export default function CustomHeader({ navigation }) {
  return (
    <View style={styles.header}>
      {/* Notification Icon */}
      <TouchableOpacity onPress={() => console.log('Notifications pressed')}>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>PAC.AI</Text>

      {/* User Icon */}
      <TouchableOpacity onPress={() => console.log('User profile pressed')}>
        <Ionicons name="person-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff', // Header background color
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});