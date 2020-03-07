import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        return (
            <ImageBackground source={require('../assets/LoginRegisterBackground.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content"></StatusBar>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.inputTitle}>Adresse mail</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            <Text style={styles.inputTitle}>Mot de passe</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Connexion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}
                        onPress={() => this.props.navigation.navigate("Register")}
                    >
                        <Text style={{ color: "white", fontSize: 13 }}>
                            Vous n'est pas inscrit ? <Text style={{ fontWeight: "500", color: "#38aae2" }}>Inscrivez-vous</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#38aae2",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#38aae2",
        fontSize: 15,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#38aae2",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#38aae2"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#38aae2",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});