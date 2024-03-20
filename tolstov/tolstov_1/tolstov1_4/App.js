import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View>
        <Button
          style = {{padding: 5}}
          title="Go to Avdey"
          onPress={() => navigation.navigate('Avdey')}
        />
        <Button
          title="Go to Masha"
          onPress={() => navigation.navigate('Masha')}
        />
        <Button
          title="Go to Oleg"
          onPress={() => navigation.navigate('Oleg')}
        />
      </View>
    </View>
  );
}

function Avdey() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Avdey</Text>
    </View>
  );
}

function Masha() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Masha</Text>
    </View>
  );
}
function Oleg() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Oleg</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Avdey" component={Avdey} />
        <Stack.Screen name="Masha" component={Masha} />
        <Stack.Screen name="Oleg" component={Oleg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
