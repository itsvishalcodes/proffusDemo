import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

const Featured_homepage = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Featured</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 16, color: '#146588' }}>VIEW ALL</Text>
                </View>
            </View>
            <View>
                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/product-bg.png')} style={styles.imgBG}>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/product1.png')} style={styles.circImg} />
                            <Text>40 Caps</Text>
                        </View>
                        <View
                            style={{
                                borderRightColor: 'black',
                                borderRightWidth: 1,
                                height: 160
                            }}
                        />
                        <View style={styles.imgText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Cephalgo</Text>
                            <Text style={{ fontSize: 12, marginBottom: 6 }}>Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.</Text>
                            <Text style={{ color: '#146588', fontSize: 18, fontWeight: '600' }}>₹ 214.00</Text>
                            <View
                                style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'flex-start'}}>
                                    <Text style={{ color: '#146588', fontSize: 18, fontWeight: '600' }}>Add to Cart</Text>
                                </View>
                                <View style={{flex: 1, alignItems: 'flex-end'}}>
                                    <Image source={require('../assets/share-icon.png')} style={{width: 20, height: 20}} />
                                </View>

                            </View>
                        </View>
                    </ImageBackground>
                </View>
                
                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/product-bg.png')} style={styles.imgBG}>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/product2.png')} style={styles.circImg} />
                            <Text>40 Caps</Text>
                        </View>
                        <View
                            style={{
                                borderRightColor: 'black',
                                borderRightWidth: 1,
                                height: 160
                            }}
                        />
                        <View style={styles.imgText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Stress Care</Text>
                            <Text style={{ fontSize: 12, marginBottom: 6 }}>Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.</Text>
                            <Text style={{ color: '#146588', fontSize: 18, fontWeight: '600' }}>₹ 850.00</Text>
                            <View
                                style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ color: '#146588', fontSize: 18, fontWeight: '600' }}>Add to Cart</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Image source={require('../assets/share-icon.png')} style={{ width: 20, height: 20 }} />
                                </View>

                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.viewBG}>
                    <ImageBackground source={require('./../assets/product-bg.png')} style={styles.imgBG}>
                        <View style={styles.circImgContainer}>
                            <Image source={require('../assets/product3.png')} style={styles.circImg} />
                            <Text>40 Caps</Text>
                        </View>
                        <View
                            style={{
                                borderRightColor: 'black',
                                borderRightWidth: 1,
                                height: 160
                            }}
                        />
                        <View style={styles.imgText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Risht Pusht Immuno</Text>
                            <Text style={{ fontSize: 12, marginBottom: 6 }}>Commodo sit quam aliquam in ut hac malesuada fringilla lobortis. Aenean id potenti blandit tempor aliquam etiam duis consectetur. Quam malesuada tristique aliquet donec sem rhoncus egestas dictumst.</Text>
                            <Text style={{ color: '#146588', fontSize: 18, fontWeight: '600' }}>₹ 2500.00</Text>
                            <View
                                style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ color: '#146588', fontSize: 18, fontWeight: '600' }}>Add to Cart</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Image source={require('../assets/share-icon.png')} style={{ width: 20, height: 20 }} />
                                </View>

                            </View>
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
        height: 240,
        marginTop: 10
    },
    imgBG: {
        height: 240,
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
        height: 140,
        width: 80
    },
    imgText: {
        flex: 5,
        padding: 15,
        overflow: 'hidden'
    }
})

export default Featured_homepage