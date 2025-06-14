import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'serif',
        fontSize: 32,
        fontWeight: 'bold'
    }
})