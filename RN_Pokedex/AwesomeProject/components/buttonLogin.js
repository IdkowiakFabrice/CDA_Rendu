import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class buttonLogin extends Component {
    render() {
        return (
            <View style={{width:'30%', alignSelf:'center'}}>
                <Button title='Click on me' color='#ee0dcc'
                onPress={()=>{
                    alert('nike ta mere')
                }}
                >
                </Button>
            </View>
        )
    }
}
