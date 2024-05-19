import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

import HelloWorld from './components/HelloWorld';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HelloWorld />
      <Button title="Sad"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
