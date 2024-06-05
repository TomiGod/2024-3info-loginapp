import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {
  ThemeDark,
  ThemeDarkNavigation,
  ThemeLight,
  ThemeLightNavigation,
} from "../config/theme";
import { useTheme } from "../contexts/ThemeContext";
import { Provider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  const {isDarkTheme } = useTheme();

  const theme = isDarkTheme ? ThemeDark : ThemeLight;
  const themeNavigation = isDarkTheme
    ? ThemeDarkNavigation
    : ThemeLightNavigation;

  return (
    <Provider theme={theme}>
    <NavigationContainer theme={themeNavigation}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Inicial",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Inicial",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
