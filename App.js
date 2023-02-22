import { StyleSheet, Text, View } from 'react-native';
import { Compass } from './src/sections/Compass';
import { Parameter } from './src/sections/Parameter';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CompassProvider } from './src/provider/CompassProvider'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <CompassProvider>
            <Stack.Navigator>
              <Stack.Screen name="Compass" component={Compass} options={{ title: 'Find your own way' }} />
              <Stack.Screen name="Parameter" component={Parameter} options={{ title: 'Parameter' }} />
            </Stack.Navigator>
          </CompassProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// x:0 ; y: 12 ; z: -18 
