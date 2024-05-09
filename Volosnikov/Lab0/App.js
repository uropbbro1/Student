import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems: "center", }}>
      <Text>Try editing me!</Text>
      <Text>Read me</Text>
    </View>
  );
}


