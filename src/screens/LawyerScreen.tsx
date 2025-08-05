import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LawyerScreen() {
  // Replace with Google Maps API integration as needed
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Lawyers Nearby</Text>
      <Text style={styles.info}>Google Maps integration coming soon.</Text>
      <Button title="Refresh" onPress={() => { /* trigger location search */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 20 },
});