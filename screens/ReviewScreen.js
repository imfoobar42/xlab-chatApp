import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Import expo document picker
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

export default function ReviewScreen() {
  const [selectedTab, setSelectedTab] = useState('Choose'); // Default tab
  const [video, setVideo] = useState(null);

  // Simulate AI analysis for Transcription
  const aiTranscription = {
    timestamp: '00:01:15',
    score: 85,
    summary: 'The AI analysis suggests that this part of the video contains key points about behavior analysis.',
  };

  // Handle video upload for 'Choose' tab
  const handleVideoSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'video/*', // Allow only video files
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

  // Render content based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 'Choose':
        return (
          <View style={styles.contentContainer}>
            <Button title="Choose Video" onPress={handleVideoSelect} />
            {video && (
              <View style={styles.videoPreview}>
                <Text style={styles.videoText}>Video: {video.name}</Text>
              </View>
            )}
          </View>
        );
      case 'DemoVideo':
        return (
          <View style={styles.contentContainer}>
            <Text>Demo Video</Text>
            {/* Replace with your actual demo video or a static placeholder */}
            <Text>Demo video placeholder here.</Text>
          </View>
        );
      case 'Transcription':
        return (
          <View style={styles.transcriptionContainer}>
            <Text style={styles.transcriptionTitle}>AI Transcription</Text>
            <Text style={styles.transcriptionText}>Timestamp: {aiTranscription.timestamp}</Text>
            <Text style={styles.transcriptionText}>Score: {aiTranscription.score}</Text>
            <Text style={styles.transcriptionSummary}>Summary: {aiTranscription.summary}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Choose')}>
          <Ionicons name="cloud-upload-outline" size={24} color="#8B008B" /> {/* Cloud upload icon */}
          <Text style={styles.tabText}>Choose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('DemoVideo')}>
          <Ionicons name="videocam-outline" size={24} color="#8B008B" /> {/* Video camera icon */}
          <Text style={styles.tabText}>DemoVideo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Transcription')}>
          <Ionicons name="document-text-outline" size={24} color="#8B008B" /> {/* Document text icon */}
          <Text style={styles.tabText}>Transcription</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.contentWrapper}>
        {renderContent()}
      </ScrollView>

      {/* Footer - Always at the bottom */}
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content Here</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between', // Ensures footer is at the bottom
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 18,
    marginLeft: 5,
    color: '#8B008B', // Purple color for tab text
  },
  contentWrapper: {
    flexGrow: 1, // Ensures the content area takes up remaining space
    marginBottom: 20, // Space between content and footer
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  videoPreview: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  videoText: {
    fontSize: 16,
    color: '#333',
  },
  transcriptionContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 5,
  },
  transcriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  transcriptionText: {
    fontSize: 16,
    color: '#ddd', // Gray color for the text
  },
  transcriptionSummary: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 10,
  },
  footer: {
    padding: 10,
    backgroundColor: '#8B008B',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});
