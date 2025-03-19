import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Import expo document picker

// Import your bot logo
import botLogo from '../assets/Logo.png'; // Replace with the path to your logo image

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [video, setVideo] = useState(null);

  // Simulate a chatbot response
  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([
        ...chatHistory,
        { sender: 'user', text: message },
        { sender: 'bot', text: `You said "${message}"` }, // Simulated response from the bot
      ]);
      setMessage('');
    }
  };

  // Handle video selection
  const handleVideoSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allows all file types, you can limit to videos by using 'video/*'
      });

      if (result.type === 'success' && result.uri) {
        setVideo(result); // Store the selected video
        console.log(result);
      }
    } catch (err) {
      console.log('Error picking document', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with AI</Text>
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((chat, index) => (
          <View
            key={index}
            style={[
              styles.chatBubble,
              chat.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            {chat.sender === 'bot' && (
              <Image source={botLogo} style={styles.botLogo} />
            )}
            <Text>{chat.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here..."
        />
        <View style={styles.buttonsContainer}>
          {/* Send Button */}
          <Button title="Send" onPress={handleSend} />
          {/* Video Upload Button */}
          <Button title="Upload Video" onPress={handleVideoSelect} />
        </View>
      </View>

      {/* Optional: Display the uploaded video (if any) */}
      {video && (
        <View style={styles.videoPreview}>
          <Text>Video: {video.name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  chatContainer: { flex: 1, marginBottom: 10 },
  chatBubble: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '80%',
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center', // Vertically center image and text
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1f1ff',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1e1e1',
  },
  botLogo: {
    width: 20, // Set the width of the bot logo
    height: 20, // Set the height of the bot logo
    marginRight: 10, // Space between logo and text
  },
  inputContainer: {
    flexDirection: 'row', // Align input field and buttons horizontally
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    flex: 1, // Allow the input field to take up available space
  },
  buttonsContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  videoPreview: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
