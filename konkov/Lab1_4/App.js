import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileScreen from "./components/Profile"
import React from "react";
import Contacts from "./components/Contacts";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Контакты"
                    component={Contacts}
                />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



