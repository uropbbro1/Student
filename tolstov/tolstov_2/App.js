import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fffeee" }}>
      <View style={{width:250}}>
        <Text style={{fontSize:24, textAlign:'center', margin: 5}}>Авторизация</Text>
        <Text style={{textAlign:'center', color:'gray', margin: 10}}>Введите логин и пароль, который вводили при авторизации</Text>

        <TextInput
          style={styles.input}
          placeholder="Почта"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
        />

        <Button
          title="Войти"
          onPress={() => Alert.alert('Вы вошли!')}
        />

        <Button
          title="Регистрация"
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </View>
  );
}

function RegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fffeee" }}>
      <View style={{width:250}}>
        <Text style={{fontSize:24, textAlign:'center', margin: 5}}>Регистрация</Text>
        <Text style={{textAlign:'center', color:'gray', margin: 10}}>Введите логин и пароль для регистрации</Text>

        <TextInput
          style={styles.input}
          placeholder="Почта"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
        />

        <TextInput
          style={styles.input}
          placeholder="Повторный пароль"
        />

        <Button
          title="Зарегистрироваться"
          onPress={() => Alert.alert('Зарегистрирован!')}
        />
      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
