import React, {useState, useEffect} from 'react';
import { Button, View, Text, TextInput, FlatList, StyleSheet, Platform } from 'react-native';
import CheckBox from 'react-native-check-box'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";


function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  
  return db;
}


const db = openDatabase();

const CreateTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists items (id integer primary key, done int, value text);'
    , [], (callback) => console.log(callback), (err) => console.log(err));
    //'create table if not exists items (id integer primary key, done int, value text);'
  });
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Список дел</Text>
      <View style={{ margin: 15 }}>
        <Button
          title="Обычные дела"
          onPress={() => navigation.navigate('DefaultDeals')}
        />
      </View>
      <View style={{ margin: 15 }}>
        <Button
          title="Правила пользования"
          onPress={() => navigation.navigate('Info')}
        />
      </View>
    </View>
  );
}

function LoadTask()
{
    var taskItems = []
    db.transaction(
      tx => {
      tx.executeSql('select * from items', [], (_, {rows}) =>
       taskItems = rows._array
      )
      }
    );

    return taskItems;
}

function DefaultDeals() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');
    const [someVar, setSomeVar] = useState(null);
    
    useEffect(() => {
      var litems = LoadTask();
      db.transaction(
        tx => {
        tx.executeSql('select * from items', [], (_, {rows}) =>
        setItems(rows._array)
        )
      }, []);
    });
    const renderData = (b) => {
        setSomeVar(b);
    }

    const handleAddItem = () => {
        if (text.trim() !== '') {
            var item = {id: items.length, done: false, value: text}
            setItems([...items, item]);
            setText('');
            UpdateList(item);
        }
    };

    const UpdateList = (item) =>
    {
        if (item === null || item.value === '') {
          console.log(item);
          return false;
        }
        
        db.transaction(
        tx => {
          tx.executeSql(`INSERT OR REPLACE into items (id, done, value) values (${item['id']}, ${item['done']}, ${item['value']})`,
          (complete) => console.log(`complete - ${complete}`),
          (err) => console.log(`err - ${err._array}`));
        },
        (c) => {console.log(c)},
        this.update
        );
        console.log('list update');
    }

    const RemoveItemFromList = (itemID) =>
    {
      if (itemID === null || itemID < 0) {
        return false;
      }

      db.transaction(
        tx => {
          tx.executeSql(`delete from items where id = ${itemID}`)
        },
        (c) => console.log(c),
        (s) => console.log(s)
      );
    }

  return (
        <View style={styles.container}>
            <Text style={styles.title}>Список обычных задач</Text>
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
                    <View style={styles.item}>
                      <Text>{item.value}</Text>
                      <CheckBox
                        onClick={()=>{
                          items[item.id]['done'] = !items[item.id]['done']
                          UpdateList(item);
                          renderData(item['value'] + item['done']);
                        }}
                        isChecked={item.done}
                      />
                    </View>
                )}
            />
        </View>
  );
}

function UssageList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Очень ограничено в использовании.!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    CreateTable();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DefaultDeals" component={DefaultDeals}/>
        <Stack.Screen name="Info" component={UssageList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
        margin: 5,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexFlow: 'wrap row'
    },
});

export default App;
