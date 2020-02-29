import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function DetailsPage ({ route, navigation }) {
    const {pokemonId} = route.params;
    const {pokemonDetails} = route.params;
    console.log(pokemonDetails.detail)
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Avatar
                size="large"
                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
            ></Avatar>
            <Text>pokemon Id: {JSON.stringify(pokemonId)}</Text>
            <Text>pokemon Name: {JSON.stringify(pokemonDetails.name)}</Text>
            <Text>pokemon height: {JSON.stringify(pokemonDetails.detail['_55'].height)}</Text>
            <Text>pokemon weight: {JSON.stringify(pokemonDetails.detail['_55'].weight)}</Text>       
            <Text>pokemon base Experience: {JSON.stringify(pokemonDetails.detail['_55']['base_experience'])}</Text>
            <Text>pokemon Type1: {JSON.stringify(pokemonDetails.detail['_55'].types[1].type.name)}</Text>       
            <Text>pokemon Type2: {JSON.stringify(pokemonDetails.detail['_55'].types[0].type.name)}</Text>
            
            <ScrollView>
                <Text>STATS:</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[0].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[0]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[1].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[1]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[2].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[2]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[3].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[3]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[4].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[4]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[5].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[5]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['effort'])})</Text>

            </ScrollView>        
        </View>
    )
}

//Affiche tout les details du pokemon: <ScrollView><Text>pokemon Details: {JSON.stringify(pokemonDetails)}</Text></ScrollView>
