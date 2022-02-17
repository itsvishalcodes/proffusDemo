import React from 'react'
import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native'

const Categories_homepage = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Categories</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={{ fontSize: 16, color: '#146588'}}>VIEW ALL</Text>
                </View>
            </View>
            <View>
                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/category-right-bg.png')} style={styles.imgBG}>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/category-img-1.png')} style={styles.circImg} />
                        </View>
                        <View style={styles.imgText}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Joint Care</Text>
                            <Text style={{fontSize: 12}}>Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/category-left-bg.png')} style={styles.imgBG}>
                        <View style={styles.imgText}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Kidney Care</Text>
                            <Text style={{fontSize: 12}}>Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.</Text>
                        </View>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/category-img-2.png')} style={styles.circImg} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/category-right-bg.png')} style={styles.imgBG}>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/category-img-3.png')} style={styles.circImg} />
                        </View>
                        <View style={styles.imgText}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Immunity Booster</Text>
                            <Text style={{fontSize: 12 }}>Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/category-left-bg.png')} style={styles.imgBG}>
                        <View style={styles.imgText}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Kidney Care</Text>
                            <Text style={{fontSize: 12}}>Turpis nunc nibh condimentum viverra pharetra leo sed. Tempus, ut a congue elementum vivamus. Elementum sodales fermentum, diam ultricies quis.</Text>
                        </View>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/category-img-4.png')} style={styles.circImg} />
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    viewBG: {
        flex: 1,
        height: 120,
        marginTop: 10
    },
    imgBG: {
        height: 100,
        elevation: 20,
        shadowColor: '#52006A',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    circImgContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circImg: {
        height: 80,
        width: 80
    },
    imgText: {
        flex: 5,
        padding: 15,
        overflow: 'hidden'
    }
})

export default Categories_homepage