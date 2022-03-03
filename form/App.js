//Imports from React
import React from 'react';
import {useState, createContext} from "react";
//Imports from React Native
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigate, NativeRouter, Routes, Route } from "react-router-native";
import Homepage from './views/Homepage';
import Login from './views/Login';
//Export User Context
export const UserContext = createContext();

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logText, setLogText] = useState("LOGIN")
  const [username, setUsername] = useState({
    name : "",
    isDisplayed : "none",
  })

  //Image picker
  const [selectedImage, setSelectedImage] = useState(null);

  const value = {
    email : email,
    setEmail : setEmail,
    password : password,
    setPassword: setPassword,
    logText : logText,
    setLogText : setLogText,
    username : username,
    setUsername : setUsername,
    selectedImage : selectedImage,
    setSelectedImage : setSelectedImage,

  }

  return (
    <UserContext.Provider value={value}>
    <SafeAreaView style={styles.container}>

      <NativeRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/homepage" element={<Homepage/>}/>
        </Routes>
      </NativeRouter>

    </SafeAreaView>
    </UserContext.Provider>
  );
}

// ----------------- STYLE COMPONENTS  --------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth : 11,
    borderRightWidth : 11,
    borderTopWidth : 10,
    borderBottomWidth : 10,
    borderRadius: 10,
    height: "100%",
    width: "100%",

  },

});


