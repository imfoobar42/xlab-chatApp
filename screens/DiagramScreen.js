import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiagramScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Process Diagram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
