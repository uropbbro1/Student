import {createStackNavigator} from '@react-navigation/stack';
import Register from "../pages/register";
import Login from "../pages/login";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Авторизация" component={Login}/>
            <Stack.Screen name="Регистрация" component={Register}/>
        </Stack.Navigator>
    );
}

export default MyStack;