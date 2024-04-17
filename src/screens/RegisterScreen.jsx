import { View } from "react-native";
import {Text, TextInput } from "react-native-paper";
import { useState } from 'react';

export default function RegisterScreen({ navigation }) {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [repetirSenha, setRepetirSenha] = useState("");
const [logradouro, setLogradouro] = useState("");
const [cep, setCep] = useState("");
const [cidade, setCidade] = useState("");
const [estado, setEstado] = useState("");

return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
    <Text>Faça seu Registro</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.innerContainer}
      />
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <Button onPress={() => navigation.navigate("LoginScreen")}>
        Voltar ao login
      </Button>
      </View>
    </View>
  );
}