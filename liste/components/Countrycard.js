import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Countrycard(props) {
  return (
    <View style={StyleSheet.container}>
        <Text>Country: {props.country.name.common}</Text>

        {
            props.country.hasOwnProperty('capital') ? ( <Text>Capital : {props.country.capital[0]}</Text>) : (null)
        }

        <Image style={styles.img} source={{uri : props.country.flags.png}}/>

    </View>
  )
}

//--------------------- STYLE COMPONENTS ---------------------

const styles = StyleSheet.create({


    container : {
        borderTop: 1,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },

    img : {
        width: 50,
        height: 50,
        marginVertical: "15",
        marginHorizontal: 'auto',
    }
})
