import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/landing';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/home';
import DetailAntrian from './src/pages/details';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer

    >
      <stack.Navigator>
        <stack.Screen 
          name="Landing" 
          component={Landing} 
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen 
          name="DetailAntrian" 
          component={DetailAntrian} 
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
