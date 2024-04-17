import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function realizaLogin() {
    console.log("Fazer Login");
  }

  return (
    <View>
      <Text>Faça seu Login</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite sua senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
        />
      <Button onPress={realizaLogin}>Fazer Login</Button>
      <Button onPress={() => navigation.navigate("RegisterScreen")}>
        Faça seu cadastro 
      </Button>
   </View>
  );
}
