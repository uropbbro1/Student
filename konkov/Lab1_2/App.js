import Books from "./components/books";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Books}
                    options={{title: '5 Книжных новинок октября'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
