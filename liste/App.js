import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>LIST OF COUNTRIES: </Text>
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign : "center",
    marginVertical : 80,
  },

  texts : {
    fontSize: 35,
    color: "green",
    fontWeight: "BOLD",
  }
});

