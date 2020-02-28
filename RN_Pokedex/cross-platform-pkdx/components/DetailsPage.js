import React from 'react'
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function DetailsPage ({ route, navigation }) {
    const {pokemonId} = route.params;
    const {pokemonDetails} = route.params


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Avatar
                size="large"
                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
            ></Avatar>
           <Text>pokemon Id: {JSON.stringify(pokemonId)}</Text>
           <Text>pokemon Details: {JSON.stringify(pokemonDetails)}</Text>
        </View>
    )
}
