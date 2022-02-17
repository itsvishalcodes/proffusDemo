import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Buttons_homepage = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <LinearGradient colors={['#2D6974', '#68B39F']} style={styles.buttonDesign}>
                    <Image source={require('../assets/btn1.png')} style={{width: 30, height: 30}} />
                    <Text style={{fontSize: 12, color: '#fff', marginTop: 10 }}>My Orders</Text>
                </LinearGradient>
                <LinearGradient colors={['#2D6974', '#68B39F']}y style={styles.buttonDesign}>
                    <Image source={require('../assets/btn2.png')} style={{width: 30, height: 30}} />
                    <Text style={{fontSize: 12, color: '#fff', marginTop: 10 }}>My Orders</Text>
                </LinearGradient>
                <LinearGradient colors={['#2D6974', '#68B39F']} style={styles.buttonDesign}>
                    <Image source={require('../assets/btn3.png')} style={{width: 30, height: 30}} />
                    <Text style={{fontSize: 12, color: '#fff', marginTop: 10 }}>My Orders</Text>
                </LinearGradient>
            </View>
            <View style={styles.container}>
                <LinearGradient colors={['#2D6974', '#68B39F']} style={styles.buttonDesign}>
                    <Image source={require('../assets/btn4.png')} style={{width: 30, height: 30}} />
                    <Text style={{fontSize: 12, color: '#fff', marginTop: 10 }}>My Orders</Text>
                </LinearGradient>
                <LinearGradient colors={['#2D6974', '#68B39F']} style={styles.buttonDesign}>
                    <Image source={require('../assets/btn5.png')} style={{width: 30, height: 30}} />
                    <Text style={{fontSize: 12, color: '#fff', marginTop: 10 }}>My Orders</Text>
                </LinearGradient>
                <LinearGradient colors={['#2D6974', '#68B39F']} style={styles.buttonDesign}>
                    <Image source={require('../assets/btn6.png')} style={{width: 30, height: 30}} />
                    <Text style={{fontSize: 12, color: '#fff', marginTop: 10 }}>My Orders</Text>
                </LinearGradient>
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
        height: 90,
        width: 90,
        borderRadius: 16,
        marginBottom: 20
    }
})

export default Buttons_homepage