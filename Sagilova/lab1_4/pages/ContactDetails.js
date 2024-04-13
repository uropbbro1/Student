import {SafeAreaView, Text, StyleSheet, Image, View, Button} from "react-native";

const borderRadiusProfilePicture = '50%'

const ContactDetails = ({route}) => {
    return (
        <SafeAreaView style={styles.profile_container}>
            <Image
                style={styles.profile_picture}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
                }}
            />
            <Text style={styles.text}>{route.params.name.name}</Text>
            <Text style={styles.text}>{route.params.phone.phone}</Text>
            <View style={styles.buttons_block}>
                <Button title={'Позвонить'}/>
                <Button title={'Написать'}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        profile_picture: {
            borderRadius: borderRadiusProfilePicture,
            width: 150,
            height: 150
        },
        profile_container: {
            display: "flex",
            alignItems: "center",
            margin: 30,
            gap: 14,
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        buttons_block: {
            display: "flex",
            flexDirection: "row"
        }
    }
)

export default ContactDetails;