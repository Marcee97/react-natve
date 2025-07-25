import { useState } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import HomeScreen from "./components/login/HomeScreen.js";
import { Main } from "./components/Main.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar style="light" />
      
          <Main />
        </View>
      </SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2b2bff",
  },
 
});
