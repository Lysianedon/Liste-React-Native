import React from 'react'
import {useState, useContext} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
//Import Image picker
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

//Import Context from App.JS
import {UserContext} from '../App'

export default function SharePicture() {
    const userContext = useContext(UserContext);

    let openShareDialogAsync = async () => {
        if (Platform.OS === 'web') {
          alert(`Uh oh, sharing isn't available on your platform`);
          return;
        }
    
        await Sharing.shareAsync(userContext.selectedImage.localUri);
        alert('Envoyé !')
      }; 


  return (
    <SafeAreaView>
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.shareBtn}>
        <Text style={styles.shareBtnText}>SHARE YOUR CUTENESS</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

// ----------------- STYLE COMPONENTS  --------------------

const styles = StyleSheet.create ({

    photoUploadText : {
        color: "white",
        fontWeight: "bold", 
      },
    
      shareBtn:
      {
        borderRadius: 18,
        width: 250,
        height: 45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        backgroundColor:"black",
        marginHorizontal: "auto",
    
      },
    
      shareBtnText : {
        color: "white",
        fontWeight: "bold", 
      },

})