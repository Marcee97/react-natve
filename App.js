import { useState } from "react";
import {
  StyleSheet,
  StatusBar
  
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Main } from "./components/Main.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {

  return (
   <>
   <SafeAreaProvider>

    <StatusBar style="light"/>
    <Main/>
   </SafeAreaProvider>
   </>
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
