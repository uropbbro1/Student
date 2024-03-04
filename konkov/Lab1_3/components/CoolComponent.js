import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, Image, Alert} from 'react-native';

const CoolComponent = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleAddItem = () => {
        if (text.trim() !== '') {
            setItems([...items, {id: items.length.toString(), text: text}]);
            setText('');
            Alert.alert('Кул', 'Добавил задачу! Сделай её!')
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{uri: 'https://i.pinimg.com/originals/43/6c/e7/436ce7f927723c35cf3eecc63d1444fd.gif'}}
                    style={styles.image}
                />
                <Text>
                    Не откладывай на завтра то, что можно сделать сегодня. Каждый шаг вперед приближает тебя к
                    достижению цели. Действуй сейчас и увидишь результаты завтра!
                </Text>
            </View>
            <Text style={styles.title}>Твой список задач</Text>
            <TextInput
                style={styles.input}
                placeholder="Задача"
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <Button title="Добавить" onPress={handleAddItem}/>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Text style={styles.item}>{item.text}</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
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
    }
});

export default CoolComponent;