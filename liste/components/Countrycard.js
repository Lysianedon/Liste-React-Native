import React from 'react'
import { useContext, useEffect, useState, createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

export default function Countrycard(props) {
    const [isDisplayed, setIsDisplayed] = useState("none");
    const [loading, setLoading] = useState(true);

    const [weather, setWeather] = useState({
        temperature : "",
        icon : "",
        description : "",

    })

    //FUNCTION TO TOGGLE CITY AND WEATHER: 
    const showCityAndWeather = async () => {

        
        setIsDisplayed((prev) => {

            if (prev === "none") {
                return "block"
            } else {
                return "none"
            }
        })

        //Fetching city weather : 

        if (props.country.hasOwnProperty('capital')) {

            setLoading(true);

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.country.capital[0]}&units=metric&appid=3ba0e4bcb575e9fa5452e20b8284a174`);
            const data = await res.json();
            console.log("res: ", data);
            
            //Guard : if a 404 error is caught, nothing happens : 
            if (data.cod === '404' || data.cod === 404) {
                return;
            }
                
            setWeather({
                temperature : data.main.temp,
                icon : data.weather[0].icon,
                description : data.weather[0].description,
            })

            setLoading(prev => !prev);

        }

    }
  return (
    <View style={StyleSheet.container}>
        <Text style={{marginVertical: 13,}}><Text style={styles.bold}>Country: </Text>{props.country.name.common}</Text>
        <Pressable onPress={showCityAndWeather}>

        <Image style={styles.img} source={{uri : props.country.flags.png}} on/>
        </Pressable>

        {
            props.country.hasOwnProperty('capital') && loading === false ? 
                ( 
                    <View>

                        <Text style={{display : isDisplayed, marginVertical: 10,}}><Text style={styles.bold}>Capital: </Text>{props.country.capital[0]}</Text>
                        <Text style={{display : isDisplayed, marginVertical: 10,}}> <Text style={styles.bold}>Current Weather :</Text>{weather.temperature}° </Text>
                        <Text style={{display : isDisplayed, marginVertical: 10,}}>{weather.description} </Text>
                        <Image style={{display : isDisplayed, width: 50, height: 50, marginHorizontal: 70,}} source={{uri : `http://openweathermap.org/img/w/${weather.icon}.png`}}/>

                    </View>
                )
                 : 
                (<ActivityIndicator
                    size="large" 
                    color="#00ff00"
                    animating={loading}
                    style={{display : isDisplayed, marginHorizontal: 70, marginVertical: 10,}}
                    />)
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

    bold : {
        fontWeight: 'bold',
    }

})
