import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function RegisterPage({navigation}) {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    {'Hello!\nSign up to get started.'}
                </Text>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput
                         style={styles.input}
                         autoCapitalize="none" 
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                         style={styles.input}
                         autoCapitalize="none" 
                        ></TextInput>
                    </View>

                    <View style = {{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                         style={styles.input} 
                         secureTextEntry 
                         autoCapitalize="none"
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={navigation.navigate("MenuPage")}>
                    <Text style={{color: "#FFF", fontWeight:"500"}}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:"center", marginTop:32}}
                onPress={() => navigation.navigate("LoginPage")}
                >
                    <Text>
                        You are not registered yet? <Text style={{fontWeight: "500", color: "#E9446A"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex : 1
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
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});