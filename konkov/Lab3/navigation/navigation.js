import {createStackNavigator} from '@react-navigation/stack';
import Register from "../components/register";
import Login from "../components/login";
import ToDoComponent from "../components/ToDo";

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