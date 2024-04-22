import {createStackNavigator} from '@react-navigation/stack';
import Register from "../pages/register";
import Login from "../pages/login";
import ToDoComponent from "../pages/ToDo";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: ()=> null
            }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="ToDoList" component={ToDoComponent}/>
        </Stack.Navigator>
    );
}

export default MyStack;