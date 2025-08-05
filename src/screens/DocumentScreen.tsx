import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function DocumentScreen() {
  const [documentText, setDocumentText] = useState('');
  const [simplified, setSimplified] = useState('');

  const handleExplain = async () => {
    // Replace with your BFF API call
    // Example:
    // const response = await getLegalAdvice(documentText);
    // setSimplified(response.simplifiedText);
    setSimplified('This is a simplified explanation of your document.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explain Legal Document</Text>
      <TextInput
        style={styles.input}
        placeholder="Paste your legal document here"
        multiline
        value={documentText}
        onChangeText={setDocumentText}
      />
      <Button title="Explain" onPress={handleExplain} />
      {simplified ? (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Simplified Explanation:</Text>
          <Text>{simplified}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, minHeight: 100, marginBottom: 20 },
  result: { marginTop: 20, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8 },
  resultTitle: { fontWeight: 'bold', marginBottom: 5 },
});