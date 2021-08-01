import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, Image } from 'react-native';
import styles from './styles';



const Header = () => {
    return (<View style={styles.container}>
        <Image style={styles.logo} source={require("D:/Cars/carScreens/src/assets/images/logo.png")} />
        <Image style={styles.menu} source={require("D:/Cars/carScreens/src/assets/images/menu.png")} />
    </View>



    );
};
export default Header;