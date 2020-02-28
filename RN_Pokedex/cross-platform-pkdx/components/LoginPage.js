import React from 'react'
import { View, Button } from 'react-native';
import PasswordField from './passwordField';
import UsernameField from './usernameField';

export default function LoginPage ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <UsernameField />
            <PasswordField />
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('MenuPage')}
        />
        </View>
    )
}
