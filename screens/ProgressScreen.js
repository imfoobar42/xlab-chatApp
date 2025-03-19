import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Score numbers 1 to 10
  datasets: [{ data: [8, 7, 7.5, 8, 9.0, 8.0, 7.5, 8.0, 8.5, 9.5] }], // Sample Scores
};

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score History</Text>
      <BarChart
        data={data}
        width={screenWidth - 40} // Responsive width
        height={250}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#e3f2fd', // Light background shade
          backgroundGradientFrom: '#bbdefb', // Light blue shade
          backgroundGradientTo: '#e3f2fd', // Light blue shade
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`, // Blue bars
          barPercentage: 0.7,
          propsForBackgroundLines: { strokeWidth: 0 },
        }}
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  chart: { borderRadius: 10 },
});
