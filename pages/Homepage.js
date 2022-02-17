import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header_homepage from '../components/Header_homepage'
import Carousel_homepage from '../components/Carousel_homepage'

const Homepage = () => {
    return (
        <View style={styles.container}>
            <Header_homepage />
            <View style={styles.carouselContainer}>
                <Text style={{ fontSize: 24, color: '#146588' }}>Hello There,</Text>
                <Text style={{ fontSize: 18, color: '#146588' }}>How can we serve you today...</Text>
                <Carousel_homepage />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    carouselContainer: {
        padding: 20
    }
})

export default Homepage;