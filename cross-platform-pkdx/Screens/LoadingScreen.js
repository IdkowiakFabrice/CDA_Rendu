import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <ImageBackground source={require('../assets/PikaKawai.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text>Loading...</Text>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});