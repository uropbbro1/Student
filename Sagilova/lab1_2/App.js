import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Правило двух минут для эффективного решения задач
            </Text>
            <View style={styles.middle_block}>
                <Text style={styles.middle_text}>Аделя Гарифзянова</Text>
                <Text style={styles.middle_text}>https://brightmagazine.ru/the-two-minute-rule/</Text>
            </View>
            <View style={styles.bottom_block}>
                <Text style={styles.bottom_text}>
                    Миллионы задач ежедневно вертятся у нас в голове, напрягая и отвлекая. Правило двух минут может
                    стать отличным инструментов для эффективного решения задач.
                    Дэвид Аллен является одним из самых влиятельных экспертов в области управления продуктивностью. Его
                    правило двух минут — это простой и очень эффективный метод решения задач, которые накапливаются в
                    нашем сознании. Нерешенные вопросы — враги нашей продуктивности, ведь они занимают место, напрягая и
                    отвлекая нас.
                </Text>
                <Button
                    title="Читать далее"
                    color="white"
                    onPress={() => Alert.alert('Читать далее')}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        paddingTop: 70,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    middle_block: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
    },
    middle_text: {
        textAlign: 'center',
        fontSize: 20
    },
    bottom_block: {
        flex: 2,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'gray',
        justifyContent: 'center',
    },
    bottom_text: {
        textAlign: 'center',
        fontSize: 14,
    }
})
export default App;