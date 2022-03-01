import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    //If the user refuses the access to its gallery, an alert is displayed
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    //Opening the gallery :
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log("picker results : ",pickerResult);

      //Guard : if the user abort the action, do nothing :
      if (pickerResult.cancelled === true) {
        return;
      }

      //Selecting the image and adding its URI to our variable selectedImage : 
      setSelectedImage({ localUri: pickerResult.uri });
    
  };
  //Creating a conditional render : if an image is selected, we display it, otherwise we display the default view:
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('./img/phone.png')} resizeMode="cover" style={styles.background}>
            <Text>INSTAFRESH</Text>
            <View style={styles.circle}>

            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
              />
              <Text>Looks good !</Text>
            </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/phone.png')} resizeMode="cover" style={styles.background}>
       <Text style={styles.texts, styles.nameAppli}>INSTAFRESH</Text>

       <View style={styles.circle}></View>

      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text  style={styles.texts, styles.textButton}>Pick a photo</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center',
    position: 'relative',
  },

  circle : {
    width: "40%",
    height: "20%",
    borderRadius: "50%",
    border: "1px solid black",
    marginHorizontal: "auto",
  },

  texts : {
    position: 'absolute',
    // marginVertical: 130,

  },

  textButton : {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  button : {
    border: 'solid 1px black',
    width: "40%",
   left : "30%",
   top: "10%",
   backgroundColor: "#009688",
   borderRadius: 10,
   paddingVertical: 10,
   paddingHorizontal: 12,
  },

  nameAppli : {
    marginTop: 190,
    marginBottom: 60,
    marginHorizontal: 120,
    fontSize: "1.5em",
    fontWeight: 'bold',
    color: "#009688",
    left : "20%",
    top: "70%",
  },

  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    maxWidth: "100%",
    maxHeight: "100%", 
  },

  background: {

    // backgroundSize : 190,
    backgroundPosition : 'cover',
    height: "100vh",
    width: "100%",
  }

});
