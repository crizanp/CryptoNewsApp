import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CryptoNewsScreen from './src/screens/CryptoNewsScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CryptoNews"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a1a1a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="CryptoNews" 
            component={CryptoNewsScreen}
            options={{ title: 'Crypto News' }}
          />
          <Stack.Screen 
            name="NewsDetail" 
            component={NewsDetailScreen}
            options={{ title: 'News Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;