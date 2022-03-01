import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Countrycard(props) {
  return (
    <View style={StyleSheet.container}>
        <Text>Country: {props.country.name.common}</Text>
        {/* <Text>Capital: {props.country.name.common}</Text> */}
        <Image style={styles.img} source={{uri : props.country.flags.png}}/>
        
        {/* {
            props.country.capital[0] === undefined ? ( <Text>Capital : {props.country.capital[0]}</Text>) : (null)
        } */}

    </View>
  )
}

//--------------------- STYLE COMPONENTS ---------------------

const styles = StyleSheet.create({


    container : {
        borderTop: 1,
        marginBottom: 5,
        display: 'flex',
    },

    img : {
        width: 50,
        height: 50,
    }
})
