import React from 'react';
import {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Button } from 'react-native';


export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>KONEXIO </Text>
      {/* LOGO */}
      <Image style={styles.img}  source={require('./assets/logoform.png')}/>


    {/* EMAIL INPUT */}
    {
      email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? 

      ( <View style={styles.inputViewSuccess}>
          <TextInput
          style={styles.TextInput}
          placeholder="Your email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          />
      </View>)
      :
      ( <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder="Your email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          />
      </View>)
    }

      {/* PASSWORD INPUT */}
      {
          password.length >= 6 ?

          ( <View style={styles.inputViewSuccess}>
            <TextInput
              style={styles.TextInput}
              placeholder="Your password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              />
            </View>)
            :

            (<View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
              </View>)
    
        }

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth : 11,
    borderRightWidth : 11,
    borderTopWidth : 10,
    borderBottomWidth : 10,
    borderRadius: 10,

  },
  title : {
    fontSize: 40,
    marginBottom: 45,
  },

  img: {
    width: 70,
    height: 110,
    marginBottom: 50,
  },

  inputView : {
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "black",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },

  inputViewError : {
    borderColor: "red",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,

  },

  inputViewSuccess : {
    borderColor: "green",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,

  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },

  loginBtn:
  {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"black",

  },

  loginText : {
    color: "white",
    fontWeight: "bold", 
  }



});
