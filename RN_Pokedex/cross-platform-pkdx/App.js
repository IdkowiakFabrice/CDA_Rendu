import * as React from 'react';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MenuPage from './components/menuPage';
import DetailsPage from './components/DetailsPage';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Header
          containerStyle={{
              backgroundColor: '#c3c4d1',
          }}
        />
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >          
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}