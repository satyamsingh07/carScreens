import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import styles from './styles';

import Carbutton from '../button';



const CarItems = (props) => {
    const { name, tagline, image } = props.car;
    return (<View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.T1}>
            <Text style={styles.Title}> {name}  </Text>
            <Text style={styles.subTitle}> {tagline}</Text>
        </View>
        <View styles={styles.buttonContainers}>
            <Carbutton type="secondary"
                content={"CUSTOM ORDER"}
                onPress={() => {
                    console.warn('Feature not available right now');
                }}
            />
            <Carbutton type="primary"
                content={"EXISTING INVENTORY"}
                onPress={() => {
                    console.warn('plz wait for a few weeks')
                }}
            />
        </View>
    </View>


    );

};
export default CarItems;