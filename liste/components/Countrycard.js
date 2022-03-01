import React from 'react'
import { useContext, useEffect, useState, createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';

export default function Countrycard(props) {
    const [isDisplayed, setIsDisplayed] = useState("none");

    //
    const showCityAndWeather = () => {

        setIsDisplayed((prev) => {

            if (prev === "none") {
                return "block"
            } else {
                return "none"
            }
        })

    }
  return (
    <View style={StyleSheet.container}>
        <Text>Country: {props.country.name.common}</Text>
        <Pressable onPress={showCityAndWeather}>

        <Image style={styles.img} source={{uri : props.country.flags.png}} on/>
        </Pressable>

        {
            props.country.hasOwnProperty('capital') ? ( <Text style={{display : isDisplayed}}>Capital : {props.country.capital[0]}</Text>) : (null)
        }


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
    },

})
