import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>APP</Text>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo : {
    width: 100,
    height: 100,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },

});
