import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SplashScreen = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SplashScreen</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.textLogin}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'times new roman',
        fontSize: 32,
        fontWeight: 'bold'
    },
    button: {
        margin: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 15
    },
    textLogin: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'times new roman',
        fontWeight: 'bold'
    }
})