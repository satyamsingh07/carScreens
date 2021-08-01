import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';
const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 20,
    },


    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }


})
export default styles;




