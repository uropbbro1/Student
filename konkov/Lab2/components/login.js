import {StyleSheet, Text, View, TextInput, Button, Image, Alert, Pressable} from 'react-native';
import {useState} from "react";

const width_proportion = '80%';

const images = {
    'login': 'https://i.pinimg.com/736x/ba/5a/67/ba5a67bcaca408a696ce4f45080a803d.jpg',
    'password': 'https://i.pinimg.com/564x/86/4d/05/864d05c88d3f53140dc9534e071d0ec8.jpg'
}


const Login = ({navigation}) => {
    const [login, onChangeLogin] = useState('');
    const [password, onChangePassword] = useState('');
    const [onPassword, setOnPassword] = useState(false)

    // const onChangePassword = (value) => {
    //     onChangePassword1(value)
    //     setOnPassword(true)
    // }
    const handlePasswordFocus = () => {
        setOnPassword(true)
    }
    const handlePasswordBlur = () => {
        setOnPassword(false)
    }

    return (
        <View style={styles.container}>
            {onPassword ?
                <Image style={styles.image}
                       source={require('../images/hide.png')}
                />
                :
                <Image style={styles.image}
                       source={require('../images/login.png')}
                />
            }

            <Text style={styles.title}>
                Авторизация
            </Text>
            <Text style={styles.description}>
                Введите логин и пароль, который создавали ранее при регистрации
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
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={password}
                placeholder="Пароль"
                secureTextEntry={true}
                keyboardType="invisible-password"
            />
            <Pressable style={styles.button}
                       onPress={() => Alert.alert('Успешно', 'Авторизация прошла успешно!')}
            >
                <Text style={styles.text}>Войти</Text>
            </Pressable>
            <Button
                title="Зарегистрироваться"
                onPress={() => navigation.navigate('Register')}
            />
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
    item: {
        fontSize: 16,
        marginBottom: 5,
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

export default Login;