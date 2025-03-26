import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// Import your bot logo
import botLogo from '../assets/Logo.png'; // Replace with the path to your logo image

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [chatMode, setChatMode] = useState('AI'); // 'AI' or 'SLP'

  // Simulate a chatbot response based on the selected chat mode
  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([
        ...chatHistory,
        { sender: 'user', text: message },
        { sender: chatMode.toLowerCase(), text: `${chatMode} bot response: "${message}"` }, // Simulated response based on the mode
      ]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>

      {/* Chat Mode Selection */}
      <View style={styles.chatModeContainer}>
        <TouchableOpacity
          style={[styles.chatButton, chatMode === 'AI' && styles.activeButton]}
          onPress={() => setChatMode('AI')}
        >
          <Text style={styles.buttonText}>Chat with AI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.chatButton, chatMode === 'SLP' && styles.activeButton]}
          onPress={() => setChatMode('SLP')}
        >
          <Text style={styles.buttonText}>Chat with SLP</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((chat, index) => (
          <View
            key={index}
            style={[
              styles.chatBubble,
              chat.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            {chat.sender !== 'user' && (
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
          placeholder={`Type your message to ${chatMode}...`}
        />
        
        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#f9f9f9' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  chatModeContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    marginBottom: 20,
  },
  chatButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#8e8e8e', // Default button color (inactive)
  },
  activeButton: {
    backgroundColor: '#8B008B', // Purple for active mode
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  chatContainer: { 
    flex: 1, 
    marginBottom: 10 
  },
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
    justifyContent: 'flex-end', // Ensure both elements stay aligned to the right
    alignItems: 'center', 
    marginTop: 10,
  },
  input: {
    height: 35,  // Adjust the height of the input box to make it smaller
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginRight: 10, // Ensure space between the input and button
    flex: 1, // Allow the input field to take up available space
  },
  sendButton: {
    backgroundColor: '#8B008B', // Purple color for the send button
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    justifyContent: 'center', // Center the text inside the button
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
