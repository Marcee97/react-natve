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
import HomeScreen from "./login/HomeScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export function Main() {

  const insets = useSafeAreaInsets()
  return (
    <View   style={{
        flex: 1, // <-- ¡esto es lo que faltaba!
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <StatusBar style="auto"/> 
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
