import {Button, StyleSheet, Text, View, Image, SafeAreaView, Alert} from 'react-native';


const Card = () => {
    return (
        <View>
            <Text
                style={styles.title}
            >
                Журнал Bright
            </Text>
            <View style={styles.container}>
                <Text
                    style={styles.blue}
                >
                    Новость
                </Text>
                <Image
                    style={styles.news_image}
                    source={{
                        uri: 'https://brightmagazine.ru/wp-content/uploads/2024/03/luis-villasmil-mlVbMbxfWI4-unsplash.jpg',
                    }}
                />
                <Text
                    style={[styles.news_title]}
                >
                    Правило двух минут для эффективного решения задач
                </Text>
                <Text>
                    Миллионы задач ежедневно вертятся у нас в голове, напрягая и отвлекая. Правило двух минут может
                    стать
                    отличным инструментов для эффективного решения задач.
                    Дэвид Аллен является одним из самых влиятельных экспертов в области управления продуктивностью. Его
                    правило двух минут — это простой и очень эффективный метод решения задач, которые накапливаются в
                    нашем
                    сознании. Нерешенные вопросы — враги нашей продуктивности, ведь они занимают место, напрягая и
                    отвлекая
                    нас.
                </Text>
                <Button
                    title={'Читать далее...'}
                    onPress={() => Alert.alert('Читать далее...')}
                />
            </View>
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaView style={styles.main_container}>
            <Card/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 24,
    },
    news_image: {
        width: 300,
        height: 200
    },
    main_container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ccccd0',
        padding: 8,
    },
    container: {
        display: "flex",
        alignItems: 'flex-start',
        gap: 10,
        padding: 30,
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 18,
        marginTop: 18,
    },
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
