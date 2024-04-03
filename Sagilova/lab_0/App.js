import {Alert, Button, StyleSheet, Text, View} from 'react-native';


const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, World!</Text>
            <Button
                title={'Hello?'}
                onPress={() => Alert.alert('Hello!')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;


