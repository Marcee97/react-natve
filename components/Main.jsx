import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal
} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export function Main() {

  const insets = useSafeAreaInsets()
  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <StatusBar style="auto"/> 
      <Text style={styles.titulo}>Donde yo quiero</Text>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0233",
   
  },
  titulo:{
    color: "red",
   
  }
});
