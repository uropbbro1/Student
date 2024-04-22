import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";

const ContactPage = ({name, phone, navigation}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.contact_block}
                onPress={() => {
                    navigation.navigate(
                        'ContactDetails',
                        {
                            name: {name},
                            phone: {phone},
                            navigation: {navigation}
                        })
                }
                }>
                <Text>{name}</Text>
                <Text>{phone}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contact_block: {
        display: 'flex',
        marginHorizontal: 8,
        padding: 8,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 8,
    },
})

export default ContactPage;