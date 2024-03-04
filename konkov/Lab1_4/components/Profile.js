import {StyleSheet, Text, View} from 'react-native';

const ProfileScreen = ({route}) => {
    console.log(route)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is {route.params.name.name}'s profile</Text>
            <Text style={styles.text}>{route.params.phone.phone}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 42,
        textAlign: 'center'
    },
});

export default ProfileScreen