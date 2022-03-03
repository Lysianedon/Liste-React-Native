import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useNavigate, NativeRouter, Routes, Route } from "react-router-native";
//Imports from React
import React from 'react';
import {useState, createContext} from "react";
// Import Views
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Comments from './views/Comments';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <NativeRouter>
        <Routes>
          <Route exact path="/" element={Login}></Route>
          <Route exact path="/home" element={Home}></Route>
          <Route exact path="/profile" element={Profile}></Route>
          <Route exact path="/comments" element={Comments}></Route>
        </Routes>
      </NativeRouter>

    </SafeAreaView>
  );
}




// ----------------- STYLE COMPONENTS  --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
