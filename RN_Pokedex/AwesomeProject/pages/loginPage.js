import React, { Component } from 'react'
import { View } from 'react-native';
import PasswordField from '../components/passwordField';
import UsernameField from '../components/usernameField';
import Header from '../components/header';
import ButtonLogin from '../components/buttonLogin';

export default class loginPage extends Component {
  render() {
    return (
      <View >
      <Header />
      <UsernameField />
      <PasswordField />
      <ButtonLogin />
    </View>
    )
  }
}
