import React from 'react'
import { TextInput, View, Text } from 'react-native'

export default function usernameField ({ navigation }) {
    return (
        <View style={{padding:'10%', paddingTop:'5%'}}>
            <Text style={{textAlign:'center', color:'#ee0dcc'}}>Mot de passe</Text>
            <TextInput 
                style={{ height: 40, borderColor: '#ee0dcc', borderWidth: 1, width:'100%', textAlign:'center' }}
                placeholder = 'Mot de passe '
            />            
        </View>
    )
}

