import {createStackNavigator} from '@react-navigation/stack';
import ContactPage from "../pages/ContactPage";
import ContactDetails from "../pages/ContactDetails";
import Contacts from "../pages/Contacts";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={Contacts}/>
            <Stack.Screen name="ContactDetails" component={ContactDetails}/>
        </Stack.Navigator>
    );
}

export default MyStack;