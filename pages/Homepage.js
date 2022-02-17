import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header_homepage from '../components/Header_homepage'
import Carousel_homepage from '../components/Carousel_homepage'
import Buttons_homepage from '../components/Buttons_homepage'
import Categories_homepage from '../components/categories_homepage'
import Featured_homepage from '../components/Featured_homepage'

const Homepage = () => {
    return (
        <View style={styles.container}>
            <Header_homepage />
            <View style={styles.paddedContainer}>
                <Text style={{ fontSize: 24, color: '#146588' }}>Hello There,</Text>
                <Text style={{ fontSize: 18, color: '#146588' }}>How can we serve you today...</Text>
                <Carousel_homepage />
                <Buttons_homepage />
                <Categories_homepage />
                <Featured_homepage />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 15 }}>© ND Care Nirogam Pvt. Ltd. - All rights Reserved</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    paddedContainer: {
        padding: 20
    }
})

export default Homepage;