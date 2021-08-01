import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get('window').height,
    }
    ,
    Title: {
        fontStyle: 'italic',
        fontSize: 40,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        color: "grey",
        fontStyle: 'italic',



    },
    T1: {
        fontSize: 35,
        fontWeight: 'bold',

        marginTop: "30%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        position: "absolute"


    },
    buttonContainers: {
        position: 'absolute',
        bottom: 50,
        width: "100%",


    }




})
export default styles;