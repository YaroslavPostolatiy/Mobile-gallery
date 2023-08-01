import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import OpenCard from './screens/OpenCard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerBackTitleVisible: false,}}/>
        <Stack.Screen name="OpenCard" component={OpenCard} options={{ title: '', headerBackTitleVisible: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
