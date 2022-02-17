import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Header_homepage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} style={{width: 108, height: 30 }} />
            </View>
            <View style={styles.drawerIcon}>
                <Image source={require('../assets/hamburger-icon.png')} style={{ width: 25, height: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 65,
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 5
    },
    drawerIcon: {
        flex: 2,
        alignItems: 'flex-end',
        marginRight: 22
    },
    logo: {
        flex: 2,
        alignItems: 'flex-start',
        marginLeft: 18
    }
})

export default Header_homepage