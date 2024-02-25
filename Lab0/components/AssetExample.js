import { Text, View, StyleSheet, Button, Alert, } from 'react-native';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  hello_text: {
    fontSize: 24,
  }
});

const show_alert = (text) => {
    Alert.alert(text)
}

const MyApp = () =>{
    return (
    <View style={styles.container}>
      <Text style={styles.hello_text}>
       Hello, World!
      </Text>
      <Button
        title="Hello, World?"
        onPress={() => show_alert('Hello, my friend!')}
      />
    </View>
  );
}

export default MyApp


