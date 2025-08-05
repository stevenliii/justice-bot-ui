import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DocumentScreen from './screens/DocumentScreen';
import LawyerScreen from './screens/LawyerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Document" component={DocumentScreen} />
        <Stack.Screen name="Lawyer" component={LawyerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}