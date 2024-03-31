import { Text, View, StyleSheet, Image, Linking, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://google.com')}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/icon.jpg')} />
      <Text style={styles.paragraph}>
        Высокая чувствительность как талант
      </Text>
      <Text style={{marginBottom : 10, textAlign:'center'}}>Способность тонко чувствительность иногда считается недостатком, но психологи смело заявляют, что на самом деле очень крутой талант. </Text>
      <Button onPress={() => Alert.Alert("clicked")} title="Читать далее..."></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 256,
    width: 256,
  }
});