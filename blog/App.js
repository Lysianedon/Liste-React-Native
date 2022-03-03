import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useNavigate, NativeRouter, Routes, Route } from "react-router-native";
//Imports from React
import React from 'react';
import {useState, createContext} from "react";
// Import Views
import Login from './views/Login';
import Profile from './views/Profile';
import Comments from './views/Comments';
import Timeline from './views/Timeline';
import AddPost from './views/AddPost';
import Post from './views/Post';

export default function App() {

  const [user, setUser] = useState({});
  
  return (
    <SafeAreaView style={styles.container}>

      <NativeRouter>
        <Routes>
          <Route exact path="/" element={Login}></Route>
          <Route exact path="/home" element={Timeline}></Route>
          <Route exact path="/home" element={Post}></Route>
          <Route exact path="/comments" element={Comments}></Route>
          <Route exact path="/home" element={AddPost}></Route>
          <Route exact path="/profile" element={Profile}></Route>
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
