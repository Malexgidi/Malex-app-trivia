import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen'
import ResultsScreen from './Screens/ResultsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer screenOptions={{
      headerShown: false, 
    }}>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="GameScreen" component={GameScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="ResultsScreen" component={ResultsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  ) 
};

export default App;
