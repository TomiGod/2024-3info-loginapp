import { View } from "react-native";
import { Surface, Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem vinda(o) ao nosso app</Text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Login
      </Button>
      export default function HomeScreen()
      
    <Surface
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    ></Surface>
    </View>
  );
}
