import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// import Carousel from 'react-native-reanimated-carousel';


const Carousel_homepage = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/caro1.jpg')} style={{height: 180, borderRadius: 5, resizeMode: 'contain' }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15

    }
})

export default Carousel_homepage