import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader({ navigation, title }) {
  return (
    <View style={styles.header}>
      {/* Left - Notification Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>

      {/* Center - Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right - Profile Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-circle-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white', // White background
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 60,
    // Shadow properties for iOS
    shadowColor: '#000', // Shadow color (black)
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow (vertical)
    shadowOpacity: 0.1, // Transparency of the shadow
    shadowRadius: 5, // Radius of the shadow blur
    borderBottomWidth: 1, // Optional: Border at the bottom
    borderBottomColor: '#dcdcdc', // Light gray border
  },
  title: {
    color: 'black', // Black text color for visibility
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    padding: 5,
  },
});
