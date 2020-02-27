import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'

export default class passwordField extends Component {
    render() {
        return (
            <View style={{padding:'10%', }}>
                <Text style={{textAlign:'center', color:'#ee0dcc'}}>Nom d'utilisateur</Text>
                <TextInput 
                    style={{ height: 40, borderColor: '#ee0dcc', borderWidth: 1, marginBottom: 20, textAlign:'center'}}
                    placeholder = "Nom d'utilisateur"
                />         
            </View>
        )
    }
}
