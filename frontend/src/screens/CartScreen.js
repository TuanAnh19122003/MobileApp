import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CartScreen</Text>
        </View>
    )
}

export default CartScreen

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