import Pokedex from './screens/Pokedex'
import Pokemon from './screens/Pokemons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen'
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCjb87r58orVufEMABZfGFlEiA2w-eO768",
    authDomain: "cross-platform-pkdx-b99fe.firebaseapp.com",
    databaseURL: "https://cross-platform-pkdx-b99fe.firebaseio.com",
    projectId: "cross-platform-pkdx-b99fe",
    storageBucket: "cross-platform-pkdx-b99fe.appspot.com",
    messagingSenderId: "539345700595",
    appId: "1:539345700595:web:697f6896442bdd4d7d5986",
    measurementId: "G-QFDJFRQPPG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
  Pokedex : Pokedex,
  Pokemons : Pokemon,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
);