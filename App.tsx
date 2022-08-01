import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import Pokemons from '@/screens/ImageList';
import queryClient from '@/services/networking/queryClient';
import { initSentry } from '@/services/sentry';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
    initSentry();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokemons"
            component={Pokemons}
            options={{ title: 'Pokemons' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
