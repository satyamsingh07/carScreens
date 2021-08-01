
import React from 'react';
import { StyleSheet, View, } from 'react-native';


import CarList from './src/assets/components/carlists';
import Header from './src/assets/components/header';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },

});