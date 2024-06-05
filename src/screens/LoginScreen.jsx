import { useState } from "react";
import { Button, Surface, Switch, Text, TextInput } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext";


export default function LoginScreen({ navigation }) {
  const {isDarkTheme, setIsDarkTheme} = useTheme();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function realizaLogin() {
    console.log("Fazer Login");
  }

  return (
    <Surface>
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
        secureTextEntry // faz com que o campo seja senha com *
      />
      <Button onPress={realizaLogin}>Fazer Login</Button>
      <Button onPress={() => navigation.navigate("RegisterScreen")}>
      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        Faça seu cadastro
      </Button>
    </Surface>
  );
}
