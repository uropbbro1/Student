import {createStackNavigator} from '@react-navigation/stack';
import Register from "../components/register";
import Login from "../components/login";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
}

export default MyStack;