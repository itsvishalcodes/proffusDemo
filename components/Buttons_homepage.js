import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Buttons_homepage = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonDesign}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign}>
                    <Text>Hi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonDesign}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDesign}>
                    <Text>Hi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 40
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonDesign: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#68B39F',
        height: 80,
        width: 80,
        borderRadius: 8,
        marginBottom: 20
    }
})

export default Buttons_homepage