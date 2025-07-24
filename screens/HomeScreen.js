import { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
export default function HomeScreen() {
  const [inputnombre, setInputnombre] = useState("");
  const [inputApellido, setInputApellido] = useState("");
  const pruebaPeticion = async () => {
    const result = await axios.get("http://localhost:3000/all-usuarios");
    console.log("lionel messi", result);
  };

  const newUser = async () => {
    try{

      const result = await axios.post("http://localhost:3000/up-usuario", {
        nombre: inputnombre,
        apellido: inputApellido
      });
      console.log(result)
    } catch(error){
      console.log(error)
    }
  };
  return (
    <View>
      <Text style={styles.home}>HomeScreen</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.inputnombre}
        onChangeText={setInputnombre}
      />
      <TextInput
        placeholder="Apellido"
        style={styles.inputnombre}
        onChangeText={setInputApellido}
        
      />
      <Button
        onPress={newUser}
        title="press"
     
      />
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    color: "green",
  },
  inputnombre: {
    color: "#ffffffff",
    backgroundColor: "#111111ff",
  },
});
