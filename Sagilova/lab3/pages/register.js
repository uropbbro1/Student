import {StyleSheet, Text, View, TextInput, Image, Alert, Pressable} from 'react-native';
import {useState} from "react";

const width_proportion = '80%';


const Register = () => {
    const [login, onChangeLogin] = useState('');
    const [password, onChangePassword] = useState('');
    const [passwordRepeat, onChangePasswordRepeat] = useState('');

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{
                       uri: 'https://avatanplus.com/files/resources/original/58b43910577bd15a7ffee7e6.png',
                   }}
            />

            <Text style={styles.title}>
                Регистрация
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Пароль"
                secureTextEntry={true}
                keyboardType="invisible-password"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePasswordRepeat}
                value={passwordRepeat}
                placeholder="Пароль ещё раз"
                secureTextEntry={true}
                keyboardType="invisible-password"
            />
            <Pressable style={styles.button} onPress={() => Alert.alert('Регистрация', 'Успешно!')}>
                <Text style={styles.text}>Зарегистрироваться</Text>
            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    description: {
        textAlign: "center",
        marginBottom: 20
    },
    input: {
        width: width_proportion,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    image: {
        width: 200,
        height: 200,
        marginEnd: 'auto',
        marginStart: 'auto',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderStyle: 'solid',
        backgroundColor: 'white',
    },
});

export default Register;