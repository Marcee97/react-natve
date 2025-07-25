import { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { login } from "./stylesLogin.js";
import { BlurView } from "expo-blur";
export default function HomeScreen() {
  const [inputnombre, setInputnombre] = useState("");
  const [inputApellido, setInputApellido] = useState("");
  const pruebaPeticion = async () => {
    const result = await axios.get("http://localhost:3000/all-usuarios");
    console.log("lionel messi", result);
  };

  const newUser = async () => {
    try {
      const result = await axios.post("http://10.0.2.2:3000/up-usuario", {
        nombre: inputnombre,
        apellido: inputApellido,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={login.login}>
      <BlurView style={login.contlogin} intensity={100} tint="dark">

      
      <TextInput
        placeholder="Nombre"
        style={login.inputnombre}
        onChangeText={setInputnombre}
        />
      <TextInput
        placeholder="Apellido"
        style={login.inputnombre}
        onChangeText={setInputApellido}
        />
     <TouchableOpacity style={login.touchablebtn}>
      <Text style={login.touchabletext}>Login</Text>
     </TouchableOpacity>
    <Text style={login.tenescuenta}>¿Ya tenes cuenta?</Text>
    <Text style={login.tenescuenta}>Registrate</Text>
        
        </BlurView>
    </View>
  );
}
