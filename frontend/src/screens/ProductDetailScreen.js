import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ProductDetailScreen</Text>
        </View>
    )
}

export default ProductDetailScreen

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