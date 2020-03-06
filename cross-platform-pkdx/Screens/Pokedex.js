import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import Logout from '../Signout'

export default function Pokedex({ navigation }) {
    useEffect(() => {
        fetchPokedex();
    },[]);
    const [pokedex,setPokedex]=useState([]);
    const fetchPokedex = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=100'
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
        element.detail = getDetailPokemon(element.url)
        element.index = i
        element.image = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`
        i = i+1
        return element
    })
    
}
  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={{width:'100%', height:'100%'}}>

<ScrollView>
        {addIndex(pokedex)}
        <Logout/>
        {pokedex.map(pokemon =>(
             <View style={{ flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
             <TouchableOpacity onPress={() => navigation.navigate('Pokemons', {
                     pokemonId:pokemon.index,
                     pokemonName: pokemon.name,
                     pokemonDetails: pokemon,
                 })}>
                 <Image source={{ uri: pokemon.image }} style={{ width: 90, height: 90 }}/>
                 <Text style={{ textTransform:"uppercase", alignContent:'space-around', justifyContent:'space-around'}}>{pokemon.name}</Text>
             </TouchableOpacity>                
         </View>    
        ))} 
        </ScrollView>
        </ImageBackground>

  );
}

// style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#bdbcbc"}}