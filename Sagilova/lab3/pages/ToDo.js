import {useState, useEffect} from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Checkbox from 'expo-checkbox';
import * as SQLite from "expo-sqlite";

function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => {
                    },
                };
            },
        };
    }

    const db = SQLite.openDatabase("db.db");
    return db;
}

const db = openDatabase();

function Items({done: doneHeading, onPressItem}) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                `select * from items where done = ?;`,
                [doneHeading ? 1 : 0],
                (_, {rows: {_array}}) => setItems(_array)
            );
        });
    }, []);

    const heading = doneHeading ? "Готово" : "Список дел";

    if (items === null || items.length === 0) {
        return null;
    }

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>{heading}</Text>
            {items.map(({id, done, value}) => (
                <TouchableOpacity
                    key={id}
                    onPress={() => onPressItem && onPressItem(id)}
                    style={{
                        backgroundColor: done ? "#1c9963" : "#fff",
                        borderColor: "#000",
                        borderWidth: 1,
                        padding: 8,
                        borderRadius: 8,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Checkbox
                            style={styles.checkbox}
                            value={!!done}
                            color={done ? '#0ed318' : '#5701b9'}
                        />
                        <Text style={{
                            color: done ? "#fff" : "#000",
                            textDecorationLine: done ? 'line-through' : 'none'
                        }}>{value}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const ToDoComponent = () => {
    const [text, setText] = useState(null);
    const [forceUpdate, forceUpdateId] = useForceUpdate();

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists items (id integer primary key not null, done int, value text);"
            );
        });
    }, []);

    const add = (text) => {
        // is text empty?
        if (text === null || text === "") {
            return false;
        }

        db.transaction(
            (tx) => {
                tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
                tx.executeSql("select * from items", [], (_, {rows}) =>
                    console.log(JSON.stringify(rows))
                );
            },
            null,
            forceUpdate
        );
    };

    return (
        <View style={styles.container}>
            {Platform.OS === "web" ? (
                <View
                    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
                >
                    <Text style={styles.heading}>
                        Expo SQlite is not supported on web!
                    </Text>
                </View>
            ) : (
                <>
                    <View style={styles.flexRow}>
                        <TextInput
                            onChangeText={(text) => setText(text)}
                            onSubmitEditing={() => {
                                add(text);
                                setText(null);
                            }}
                            placeholder="Какие есть задачи?"
                            style={styles.input}
                            value={text}
                        />
                    </View>
                    <ScrollView style={styles.listArea}>
                        <Items
                            key={`forceupdate-todo-${forceUpdateId}`}
                            done={false}
                            onPressItem={(id) =>
                                db.transaction(
                                    (tx) => {
                                        tx.executeSql(`update items set done = 1 where id = ?;`, [
                                            id,
                                        ]);
                                    },
                                    null,
                                    forceUpdate
                                )
                            }
                        />
                        <Items
                            done
                            key={`forceupdate-done-${forceUpdateId}`}
                            onPressItem={(id) =>
                                db.transaction(
                                    (tx) => {
                                        tx.executeSql(`delete from items where id = ?;`, [id]);
                                    },
                                    null,
                                    forceUpdate
                                )
                            }
                        />
                    </ScrollView>
                </>
            )}
        </View>
    );
}

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    input: {
        borderColor: "#1c00ff",
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        margin: 16,
        padding: 8,
    },
    listArea: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        paddingTop: 16,
    },
    sectionContainer: {
        gap: 16,
        marginBottom: 16,
        marginHorizontal: 16,
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },
    checkbox: {
        margin: 8,
    },
});


export default ToDoComponent;
