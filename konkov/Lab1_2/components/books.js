import {Pressable, StyleSheet, Text, View} from "react-native";

const Books = () => {
    return (
        <View
            style={styles.container}>
            <View style={styles.small_container}>
                <Text style={styles.text_container}>
                    "Кадиш.com" Натан Ингландер
                    Издательство "Книжники"
                </Text>
            </View>
            <View style={styles.big_container}>
                <Text style={styles.text_container}>
                    Используйте flex в стиле компонента, чтобы компонент динамически расширялся и сжимался в зависимости
                    от доступного пространства. Обычно вы будете использовать flex: 1, который говорит компоненту
                    заполнить все доступное пространство, равномерно распределенное между другими компонентами с тем же
                    родителем. Чем больше значение flex, тем большее отношение пространства займет компонент по
                    сравнению с его братьями и сестрами.
                </Text>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Читать далее...</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
    text_container: {
        fontSize: 20,
        textAlign: 'center',
    },
    small_container: {
        flex: 1,
        backgroundColor: '#bdbdbd',
        padding: 20,
    },
    big_container: {
        flex: 4,
        backgroundColor: '#797979',
        padding: 20,
    },
    button: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 18,
        borderRadius: 4,
        backgroundColor: '#d0d0d0',
    },
});

export default Books