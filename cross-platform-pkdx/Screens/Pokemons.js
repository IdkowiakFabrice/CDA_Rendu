import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function Pokemon ( route ) {

    const {pokemonId} = route.navigation.state.params;
    const {pokemonDetails} = route.navigation.state.params;
    const type2 = JSON.stringify(pokemonDetails.detail['_55'].types[1]) !== undefined ? JSON.stringify(pokemonDetails.detail['_55'].types[1].type.name) : 'nothing';

    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={{width:'100%', height:'100%'}}>

            <ScrollView style={{}}>
            <View style={{alignItems:'center', marginBottom:50}}>
            <View style={{flexDirection:'row'}}><Text style={{color:'orange', paddingRight:10, fontSize:30}}>No. {pokemonId}</Text><Text style={{color:'#2f2b29', fontSize:30}}>{JSON.stringify(pokemonDetails.name).toUpperCase()}</Text></View>
                 <Image source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }} style={{ width: 90, height: 90 }}/>
            </View>   
            <View style={{alignItems:'center',}}>
                <View style={{alignSelf:'stretch',alignItems:'center', padding:10, borderColor:'orange', borderWidth:3}}><Text style={{fontSize:20, color:'#2f2b29'}}>Type: {JSON.stringify(pokemonDetails.detail['_55'].types[0].type.name)} / {type2} </Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, paddingLeft:20}}>Height:</Text><Text style={{fontSize:20, paddingRight:40, paddingLeft:40, color:'grey'}}>{JSON.stringify(pokemonDetails.detail['_55'].height)}</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, paddingLeft:20}}>Weight:</Text><Text style={{fontSize:20, paddingRight:40, paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].weight)}</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey', marginBottom:40}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, paddingLeft:20}}>Base Experience:</Text><Text style={{fontSize:20, paddingRight:40, paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55']['base_experience'])}</Text></View>
            </View>
            <View style={{alignItems:'center',}}>
                <View style={{backgroundColor:'#c3c4d1',alignSelf:'stretch',alignItems:'center', padding:10, borderColor:'orange', borderWidth:3}}><Text style={{fontSize:20}}>STATS</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, backgroundColor:"#c3c4d1", paddingLeft:20}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[0].stat.name)}</Text><Text style={{fontSize:20, paddingRight:40, backgroundColor:"white", paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['effort'])})</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, backgroundColor:"#c3c4d1", paddingLeft:20}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[1].stat.name)}</Text><Text style={{fontSize:20, paddingRight:40, backgroundColor:"white", paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['effort'])})</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, backgroundColor:"#c3c4d1", paddingLeft:20}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[2].stat.name)}</Text><Text style={{fontSize:20, paddingRight:40, backgroundColor:"white", paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['effort'])})</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, backgroundColor:"#c3c4d1", paddingLeft:20}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[3].stat.name)}</Text><Text style={{fontSize:20, paddingRight:40, backgroundColor:"white", paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['effort'])})</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, backgroundColor:"#c3c4d1", paddingLeft:20}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[4].stat.name)}</Text><Text style={{fontSize:20, paddingRight:40, backgroundColor:"white", paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['effort'])})</Text></View>
                <View style={{flexDirection:'row', alignSelf:'stretch', alignItems:'center', borderWidth:1, borderColor:'grey'}}><Text style={{fontSize:20, borderRightWidth:1, paddingRight:40, backgroundColor:"#c3c4d1", paddingLeft:20}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[5].stat.name)}</Text><Text style={{fontSize:20, paddingRight:40, backgroundColor:"white", paddingLeft:40}}>{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['effort'])})</Text></View>
            </View>        
        </ScrollView>
        </ImageBackground>
    )
}