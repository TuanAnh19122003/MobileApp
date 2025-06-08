import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

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
    }
})