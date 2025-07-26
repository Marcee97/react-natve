import { useState } from "react";
import axios from "axios";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <View style={login.icons}>

<MaterialCommunityIcons name="beer" size={32} color="#fff" /><MaterialCommunityIcons name="glass-mug-variant" size={32} color="#fff" />
<MaterialCommunityIcons name="bottle-wine" size={32} color="#fff" />
<MaterialCommunityIcons name="cupcake" size={32} color="#fff" />
      </View>
      <BlurView style={login.contlogin} intensity={100} tint="dark">
        <TextInput
          placeholder="Nombre"
          placeholderTextColor={"#575656ff"}
          style={login.inputnombre}
          onChangeText={setInputnombre}
        />
        <TextInput
          placeholder="Apellido"
          placeholderTextColor={"#575656ff"}
          style={login.inputnombre}
          onChangeText={setInputApellido}
        />
        <TouchableOpacity style={login.touchablebtn}>
          <Text style={login.touchabletext}>Sign In</Text>
        </TouchableOpacity>
        <View style={login.cont_redes}>
         
        </View>
        <Text style={login.tenescuenta}>¿Ya tenes cuenta?</Text>
        <Text style={login.tenescuenta}>Registrate</Text>
      </BlurView>
    </View>
  );
}
