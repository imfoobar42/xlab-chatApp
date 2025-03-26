import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Import expo document picker

export default function ReviewScreen() {
  const [video, setVideo] = useState(null);

  // Handle video upload
  const handleVideoSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'video/*', // Allow only video files (you can change it if needed)
      });

      if (result.type === 'success' && result.uri) {
        setVideo(result); // Store the selected video
        console.log(result);
        Alert.alert('Success', 'Video uploaded successfully');
      }
    } catch (err) {
      console.log('Error picking document', err);
      Alert.alert('Error', 'There was an issue with the upload');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload a Video</Text>

      <Button title="Upload Video" onPress={handleVideoSelect} />

      {/* Optional: Display the uploaded video info */}
      {video && (
        <View style={styles.videoPreview}>
          <Text>Video: {video.name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
  videoPreview: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
