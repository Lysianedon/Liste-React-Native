import React from 'react';
import { useContext, useEffect, useState, createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import Countrycard from './Countrycard';




export default function List() {
    
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
        console.log(data);
  
      };
    
    useEffect(()=> {

        fetchData();
        setLoading((prev) => !prev);

    }, [])


    return (
        <View style={styles.container}>
          <FlatList
          style={{ margin: 100 }}
          data={countries}
          renderItem={(data) => <Countrycard country={data.item}/>}
          keyExtractor={(data, index) => index.toString()}
          ItemSeparatorComponent={() => (
              <View style={ styles.separator}></View>
          )}
          />

          
          <ActivityIndicator size="large" color="#00ff00" animating={loading}/>

          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign : "center",
        marginVertical : 0,
    },

    separator : {
        marginVertical: 10,
        borderBottomWidth: 1, 
    },

  });
