import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native';
import { ListItem, Image, Avatar } from 'react-native-elements';


export default function Pokedex({ navigation }) {
    useEffect(() => {
        fetchPokedex();

    },[]);

    const [pokedex,setPokedex]=useState([]);

    const fetchPokedex = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=10'
        );
        const pokedex = await data.json();
        setPokedex(pokedex.results);
};

function getDetailPokemon(linkPokemon) {
    return fetch(linkPokemon)
        .then((response) => response.json())
        .then((responseJson) => {
        return responseJson;
        })
        .catch((error) => {
        console.error(error);
        });
    }

function addIndex(pokedex){
    let i = 1
    pokedex = pokedex.map(function(element) {
        element.index = i
        element.detail = getDetailPokemon(element.url)
        element.image = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`
        i = i+1
        return element
    })
}
  return (
        <ScrollView>
        {addIndex(pokedex)}
        <Text>Pokedex</Text>
        
        {pokedex.map(pokemon =>(
            <View>
                <Text>{pokemon.name}</Text>
                <Avatar
                    size="large"
                    source={{ uri: pokemon.image }} 
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('DetailsPage', {
                        pokemonId: pokemon.index,
                        pokemonDetails : pokemon,
                    })}
                />
            </View>
        ))} 
        </ScrollView>
  );
}
