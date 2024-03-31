import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  Alert,
} from 'react-native';

const AssetExample = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const OnItemAdd = () => {
    if (text.trim() !== '') {
      setItems([...items, { id: items.length.toString(), text: text }]);
      setText('');
    }
  };

  const OnItemRemove = (item) => {
    console.log(item.index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Таск трекер</Text>
      <TextInput
        style={styles.input}
        placeholder="Задача"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Добавить" onPress={OnItemAdd} />
      <Text style={styles.title}>Список задач</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
    marginTop: 20,
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
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default AssetExample;
