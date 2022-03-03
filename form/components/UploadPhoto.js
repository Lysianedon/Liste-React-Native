import React from 'react'
import {useState, useContext} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, _ImageBackground } from 'react-native';
//Import Image picker
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
//Import Context from App.JS
import {UserContext} from '../App'

export default function UploadPhoto(props) {

    const userContext = useContext(UserContext);

    //Creating the function that will open the user's gallery :
    let handleUpload = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        //If the user refuses the access to its gallery, an alert is displayed
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
        //Opening the gallery :
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        //Guard : if the user abort the action, do nothing :
        if (pickerResult.cancelled === true) {
            return;
          }
          //Selecting the image and adding its URI to our variable selectedImage : 
          userContext.setSelectedImage({ localUri: pickerResult.uri });

        };

      
          return (
            <SafeAreaView>

                <TouchableOpacity style={styles.uploadBtn} onPress={handleUpload}>
                <Text style={styles.uploadBtnText}>UPLOAD A PHOTO</Text>
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
    
      uploadBtn:
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
    
      uploadBtnText : {
        color: "white",
        fontWeight: "bold", 
      },

})
