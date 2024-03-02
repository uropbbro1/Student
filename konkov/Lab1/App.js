import Journal from "./components/journal";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Journal}
                    options={{title: 'Журнал Bright'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
