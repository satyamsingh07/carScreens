import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Carbutton = (props) => {
    //const type = props.type;
    //const content = props.content;
    //const onPress = props.onPress;
    const { type, content, onPress } = props;
    const backgroundColor = type === "primary" ? "#FFFFFFA6" : "#171A20CC";
    const textColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}>


                <Text style={[styles.text, { color: textColor }]}>{content}</Text>




            </Pressable>


        </View>);




};


export default Carbutton;