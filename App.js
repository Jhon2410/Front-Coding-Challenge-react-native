// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home"
import Game from "./pages/Game"
import Results from './pages/Results';
import { Provider } from 'react-redux'
import gameReducer from './store/gameReducer';

const Stack = createNativeStackNavigator();

function App() {
  return (
 
    <NavigationContainer>
      <Provider store={gameReducer}>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="game" component={Game} />
        <Stack.Screen name="results" options={{ headerShown: false }}  component={Results} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

export default App;