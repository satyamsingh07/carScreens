import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars';

import CarItems from "D:/Cars/carScreens/src/assets/components/carItems";

const CarList = (props) => {
    return (<View style={styles.container}>


        <FlatList
            data={cars}
            renderItem={({ item }) => <CarItems car={item} />}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}

        />

    </View>








    );


}
export default CarList;