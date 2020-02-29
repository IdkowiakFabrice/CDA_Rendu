import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './components/LoginPage';
import MenuPage from './components/menuPage';
import DetailsPage from './components/DetailsPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', }}
          rightComponent={{ icon: 'account-box', color: '#fff' }}
          containerStyle={{
              backgroundColor: 'grey',
          }}
        />
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >          
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


