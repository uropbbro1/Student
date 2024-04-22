import {SafeAreaView, StyleSheet} from "react-native";
import ContactPage from "./ContactPage";

const Contacts = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contact_block}>
            <ContactPage name={'Oleg'} phone={'89888888888'} navigation={navigation}/>
            <ContactPage name={'Masha'} phone={'89888888888'} navigation={navigation}/>
            <ContactPage name={'Dima'} phone={'89888888888'} navigation={navigation}/>
            <ContactPage name={'Danil'} phone={'89888888888'} navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contact_block: {
        marginVertical: 16,
        display: 'flex',
        gap: 16,
    },
})
export default Contacts;