import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Pokemon(route, { navigation }) {

    const { pokemonId } = route.navigation.state.params;
    const { pokemonDetails } = route.navigation.state.params;
    console.log(pokemonDetails)
    const type2 = JSON.stringify(pokemonDetails.detail['_55'].types[1]) !== undefined ? JSON.stringify(pokemonDetails.detail['_55'].types[1].type.name) : 'nothing';
    const frontImage = pokemonDetails.detail['_55'].sprites['front_default']
    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={{ width: '100%', height: '100%' }}>
            <ScrollView style={{}}>
                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <View style={{ flexDirection: 'row' }}><Image source={{ uri: frontImage }} style={{ width: 130, height: 130 }}></Image><Text style={{ color: 'orange', marginLeft: '-5%', paddingRight: 10, fontSize: 30 }}> No. {pokemonId}</Text><Text style={{ color: 'orange', fontSize: 30 }}>{JSON.stringify(pokemonDetails.name).toUpperCase()}</Text></View>
                    <Image source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }} style={{ width: 90, height: 90 }} />
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View style={{ alignSelf: 'stretch', alignItems: 'center', padding: 10, borderColor: 'orange', borderWidth: 3 }}><Text style={{ fontSize: 20, color: '#2f2b29' }}>Type: {JSON.stringify(pokemonDetails.detail['_55'].types[0].type.name)} / {type2} </Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Height:</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40, color: 'grey' }}>{JSON.stringify(pokemonDetails.detail['_55'].height)}</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Weight:</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].weight)}</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', marginBottom: 40 }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Base Experience:</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55']['base_experience'])}</Text></View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#c3c4d1', alignSelf: 'stretch', alignItems: 'center', padding: 10, borderColor: 'orange', borderWidth: 3 }}><Text style={{ fontSize: 20 }}>STATS</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', backgroundColor: '#ec1c24' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>HP</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['effort'])})</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', backgroundColor: '#e4813e' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Attack</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['effort'])})</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', backgroundColor: '#ffca18' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Defense</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['effort'])})</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', backgroundColor: '#1571a7' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Sp.Atk</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['effort'])})</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', backgroundColor: '#23a715' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Sp.Def</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['effort'])})</Text></View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', borderWidth: 1, borderColor: 'grey', backgroundColor: '#de1b5c' }}><Text style={{ fontSize: 20, borderRightWidth: 1, paddingRight: 40, paddingLeft: 20 }}>Speed</Text><Text style={{ fontSize: 20, paddingRight: 40, paddingLeft: 40 }}>{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['effort'])})</Text></View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
/*
{JSON.stringify(pokemonDetails.detail['_55'].stats[0].stat.name)}
{JSON.stringify(pokemonDetails.detail['_55'].stats[1].stat.name)}
{JSON.stringify(pokemonDetails.detail['_55'].stats[2].stat.name)}
{JSON.stringify(pokemonDetails.detail['_55'].stats[3].stat.name)}
{JSON.stringify(pokemonDetails.detail['_55'].stats[4].stat.name)}
{JSON.stringify(pokemonDetails.detail['_55'].stats[5].stat.name)}
*/