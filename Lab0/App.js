import { SafeAreaView, StyleSheet } from 'react-native';


// or any files within the Snack
import MyApp from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
