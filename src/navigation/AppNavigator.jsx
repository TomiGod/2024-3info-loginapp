import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import lOGINScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}></Stack.Screen>
                <Stack.Screen name="Login" component={HomeScreen} options={{title: 'Home'}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}