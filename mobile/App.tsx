import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from "expo-system-ui";
import { useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  //Alterar a cor de fundo de acordo com o tema
  const getColor = async() => {
    const color = await NavigationBar.getBackgroundColorAsync();
    SystemUI.setBackgroundColorAsync(color);
  }
  getColor();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
